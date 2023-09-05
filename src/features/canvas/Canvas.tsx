import React, { useEffect } from "react";
import "./Canvas.scss";
import { setD3Simulation } from "./utils/d3";
import NodeDescriptionCard from "@/features/nodeDescriptionCard/NodeDescriptionCard";
import { glossary_data } from "./data/glossary";
import Modal from "@/components/modal/Modal";
import AddNode from "../addnode/AddNode";

type TDisplaySize = {
  width: number;
  height: number;
};

type TTooltip = {
  open: boolean;
  x: number;
  y: number;
  text: string;
};

type TContextMenuPosition = {
  open: boolean;
  x: number;
  y: number;
  masterId: string;
};

const initialContextMenuPosition: TContextMenuPosition = {
  open: false,
  x: 0,
  y: 0,
  masterId: "",
};

export default function CanvasV3() {
  const [glossary, setGlossary] = React.useState(glossary_data);
  const svgRef = React.useRef<SVGSVGElement | null>(null);
  const canvasRef = React.useRef<HTMLDivElement>(null);
  const [displaySize, setDisplaySize] = React.useState<TDisplaySize>({
    // width: canvasRef.current?.clientWidth ?? 0,
    // height: canvasRef.current?.clientHeight ?? 0,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [viewBoxZoom, setViewBoxZoom] = React.useState(window.innerWidth);
  const [viewBoxPosition, setViewBoxPosition] = React.useState({ x: 0, y: 0 });
  const [contextMenu, setContextMenu] = React.useState<TContextMenuPosition>(
    initialContextMenuPosition
  );
  const [tooltip, setTooltip] = React.useState<TTooltip>({
    open: false,
    x: 0,
    y: 0,
    text: "tooltip",
  });
  const [addNode, setAddNode] = React.useState(false);
  const prevAddedRef = React.useRef(true);


  const updateTooltip = (
    open: boolean,
    x: number = 0,
    y: number = 0,
    text: string = ""
  ) => {
    setTooltip({ open, x, y, text });
  };

  const closeContextMenu = () => {
    setContextMenu(initialContextMenuPosition);
    const circles = document.querySelectorAll(".circle-0");
    circles.forEach((circle) => {
      circle.classList.remove("gray-node");
    });
    document.querySelectorAll(".gray-before-context").forEach((circle) => {
      console.log("here");
      circle.classList.add("gray-node");
      circle.classList.remove("gray-before-context");
    });
  };

  const openContextMenu = (x: number, y: number, masterId: string) => {
    setContextMenu({ open: true, x, y, masterId });
    document.querySelectorAll(".gray-node").forEach((circle) => {
      circle.classList.add("gray-before-context");
    });
    const circles = document.querySelectorAll(".circle-0");
    circles.forEach((circle) => {
      circle.classList.add("gray-node");
    });
    document
      .querySelector(`.circle-0.${masterId}`)
      ?.classList.remove("gray-node");
  };

  // Tried to set dynamic widtha and height of canvas according to remaining space but failed
  useEffect(() => {
    setDisplaySize({
      width: canvasRef.current?.clientWidth ?? 0,
      height: canvasRef.current?.clientHeight ?? 0,
    });
  }, [canvasRef.current?.clientWidth, canvasRef.current?.clientHeight]);

  // d3 svg
  useEffect(() => {
    setD3Simulation(svgRef, glossary ?? [], updateTooltip, openContextMenu);
  }, [glossary]);

  useEffect(() => {
    if (!svgRef || !svgRef.current) return;

    function mouseWheelHandler(event: WheelEvent) {
      setViewBoxZoom((prev) => prev + event.deltaY / 1);
    }
    svgRef.current.addEventListener("wheel", mouseWheelHandler);

    return () => {
      svgRef.current?.removeEventListener("wheel", mouseWheelHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    return () => {
      // Remove event listeners when component unmounts
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  }, []);

  let cursorAtDown_X: number = 0;
  let cursorAtDown_Y: number = 0;

  function mouseDownHandler(e: MouseEvent) {
    if (e.button != 0) return;
    cursorAtDown_X = e.x;
    cursorAtDown_Y = e.y;
    svgRef?.current?.addEventListener("mousemove", mouseMoveHandler);
    svgRef?.current?.addEventListener("mouseup", mouseUpHandler);
  }

  function mouseMoveHandler(e: MouseEvent) {

    setViewBoxPosition((prev) => {
      if (!prevAddedRef.current) {
        prevAddedRef.current = true;
        return prev;
      }

      const sensitivityFactor = 5; // Adjust this as needed
      const newX = prev.x + (cursorAtDown_X - e.x) / sensitivityFactor;
      const newY = prev.y + (cursorAtDown_Y - e.y) / sensitivityFactor;

      return { x: newX, y: newY };
    })
  }

  function mouseUpHandler() {
    // remove event mousemove && mouseup
    svgRef?.current?.removeEventListener("mousemove", mouseMoveHandler);
    // svgRef?.current?.removeEventListener("mouseup", mouseUpHandler);
  }

  // useEffect(() => {
  //   if (!svgRef || !svgRef.current) return;
  //   let cursorAtDown_X: number;
  //   let cursorAtDown_Y: number;

  //   function mouseWheelHandler(event: WheelEvent) {
  //     setViewBoxZoom((prev) => prev + event.deltaY / 1);
  //   }

  //   svgRef.current.addEventListener("wheel", mouseWheelHandler);

  //   function mouseDownHandler(e: MouseEvent) {
  //     if (e.button != 0) return;
  //     cursorAtDown_X = e.x;
  //     cursorAtDown_Y = e.y;
  //     svgRef?.current?.addEventListener("mousemove", mouseMoveHandler);
  //     svgRef?.current?.addEventListener("mouseup", mouseUpHandler);
  //   }

  //   function mouseMoveHandler(e: MouseEvent) {
  //     setViewBoxPosition({
  //       x: (cursorAtDown_X - e.x) * 3,
  //       y: (cursorAtDown_Y - e.y) * 3,
  //     });
  //   }

  //   function mouseUpHandler() {
  //     // remove event mousemove && mouseup
  //     svgRef?.current?.removeEventListener("mousemove", mouseMoveHandler);
  //     svgRef?.current?.removeEventListener("mouseup", mouseUpHandler);
  //   }

  //   svgRef.current.addEventListener("mousedown", mouseDownHandler);
  //   return () => {
  //     svgRef.current?.removeEventListener("wheel", mouseWheelHandler);
  //     svgRef.current?.removeEventListener("mousedown", mouseDownHandler);
  //   };
  // }, []);

  return (
    <div className="select-none canvas-cover " ref={canvasRef}>
      <svg
        ref={svgRef}
        width={displaySize.width}
        height={displaySize.height}
        viewBox={`${viewBoxPosition.x} ${viewBoxPosition.y} ${viewBoxZoom} ${viewBoxZoom}`}
        onContextMenu={(e) => {
          e.preventDefault();
          if (contextMenu.open) return;
          setAddNode(true);
        }}
      >
        <defs>
          <marker
            id="arrow"
            markerUnits="strokeWidth"
            markerWidth="12"
            markerHeight="12"
            viewBox="0 0 12 12"
            refX="6"
            refY="6"
            orient="auto"
          >
            <path
              d="M2,2 L10,6 L2,10 L6,6 L2,2"
              className="fill-skin-secondary"
            ></path>
          </marker>
        </defs>
      </svg>
      <NodeDescriptionCard
        open={contextMenu.open}
        x={contextMenu.x}
        y={contextMenu.y}
        glossaryId={contextMenu.masterId}
        handleClose={closeContextMenu}
      />

      <div
        className="absolute p-2 text-white bg-black rounded bg-opacity-60"
        style={{
          top: tooltip.y + 12 + "px",
          left: tooltip.x - 5 + "px",
          display: tooltip.open ? "block" : "none",
        }}
      >
        {tooltip.text}
      </div>
      <Modal open={addNode} onClose={() => setAddNode(false)}>
        <AddNode
          onClose={() => setAddNode(false)}
          glossary={glossary}
          setGlossary={setGlossary}
        />
      </Modal>
    </div>
  );
}
