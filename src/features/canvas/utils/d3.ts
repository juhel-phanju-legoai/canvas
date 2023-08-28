import {
  arc,
  drag,
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  pie,
  select,
} from "d3";
import {
  getLinksOfForeignConnection,
  getNodesAndLinksFromGlossary,
} from "./canvasAPI";
import { TGlossary } from "@/types/glossary";
import { getSvg } from "@/components/icons/Svg";

const textBackgroudColor = "#292929";
const MAXTEXTCHARECTERS = 15;
const DATAQUALITYCOLORS = ["#00be14", "#ff0000", "#808080"];

function distanceFormula(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function sectionFormula(x1: number, x2: number, m: number, n: number) {
  return (m * x1 + n * x2) / (m + n);
}

function getTargetXY(
  targetX: number,
  targetY: number,
  sourceX: number,
  sourceY: number,
  size: number,
  returnV: "x" | "y"
) {
  let totalDistance = distanceFormula(targetX, targetY, sourceX, sourceY);
  let m = size;
  let n = totalDistance - size * 2.3;
  // console.log(m, n)
  if (returnV == "x") return sectionFormula(targetX, sourceX, n, m);
  return sectionFormula(targetY, sourceY, n, m);
}

function addOpacityInRGB(color: string, opacity: number) {
  let colorWithAddedOpacity = color.substring(0, 3) + "a" + color.substring(3);
  let len = colorWithAddedOpacity.length - 1;
  colorWithAddedOpacity = `${colorWithAddedOpacity.substring(
    0,
    len
  )},${opacity})`;
  colorWithAddedOpacity = colorWithAddedOpacity.replaceAll(" ", "");
  return colorWithAddedOpacity;
}

function listToString(items: any[]) {
  return items.reduce((acc, item) => `${item?.toString()} ${acc}`, "");
}

function clipText(text: string, type?: string) {
  if (text.length < MAXTEXTCHARECTERS) return text;
  if (type == "table") return text;
  return text.substring(0, MAXTEXTCHARECTERS) + "...";
}

// function componentFromStr(numStr: any, percent: any) {
//   var num = Math.max(0, parseInt(numStr, 10));
//   return percent
//     ? Math.floor((255 * Math.min(100, num)) / 100)
//     : Math.min(255, num);
// }

// function rgbToHex(rgb: string) {
//   var rgbRegex =
//     /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
//   var result,
//     r,
//     g,
//     b,
//     hex = "";
//   if ((result = rgbRegex.exec(rgb))) {
//     r = componentFromStr(result[1], result[2]);
//     g = componentFromStr(result[3], result[4]);
//     b = componentFromStr(result[5], result[6]);

//     hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   return hex;
// }

// function g

export async function setD3Simulation(
  svgRef: React.MutableRefObject<SVGSVGElement | null>,
  glossary: TGlossary[],
  updateTooltip: (open: boolean, x?: number, y?: number, text?: string) => void,
  openContextMenu: (x: number, y: number, masterId: string) => void
) {
  const svg = select(svgRef.current);
  const width: number = +svg.attr("width");
  const height: number = +svg.attr("height");

  let { nodes, links } = await getNodesAndLinksFromGlossary(glossary);

  let foreignLinks = await getLinksOfForeignConnection(nodes);

  const showContextMenu = (x: number, y: number, masterId: string) => {
    openContextMenu(x, y, masterId);
  };

  const simulation = forceSimulation(nodes as {}[])
    .force("charge", forceManyBody().strength(-180))
    .force(
      "link",
      forceLink(links as any[]).distance((link: any) => link.distance)
    )
    .force("center", forceCenter(width / 2, height / 2))
    .force(
      "collide",
      forceCollide()
        .strength(1)
        .radius((d: any) => d.size)
        .iterations(1)
    );

  // function dragstarted(d: any) {
  //   if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  //   d.fx = d.x;
  //   d.fy = d.y;
  // }

  // function dragged(d: any) {
  //   d.fx = d3.event.x;
  //   d.fy = d3.event.y;
  // }

  // function dragended(d: any) {
  //   if (!d3.event.active) simulation.alphaTarget(0);
  //   d.fx = null;
  //   d.fy = null;
  // }

  const dragInteraction: any = drag().on("drag", (event, node: any) => {
    // if (!event.active) simulation.alphaTarget(0);
    node.x = event.x;
    node.y = event.y;
    simulation.alpha(1);
    simulation.restart();
  });

  const lines = svg
    .selectAll(".inner-connections")
    .data(links)
    .enter()
    .append("line")
    .attr("id", (link: any) => link.target.masterId)
    .attr("class", (link: any) =>
      listToString([
        "svg-object",
        "inner-connections",
        link.target.name,
        link.target.masterId,
        `level-${link.target.level}`,
      ])
    )
    .attr("stroke", (link: any) => {
      return link.color;
    })
    .attr("marker-end", "url(#arrow)");

  const foreignLines = svg
    .selectAll(".foreign-connections")
    .data(foreignLinks)
    .enter()
    .append("line")
    .attr("class", (link: any) =>
      listToString([
        "svg-object",
        "foreign-connections",
        link.target.name,
        link.target.masterId,
        `level-${link.target.level}`,
      ])
    )
    .attr("stroke", (link: any) => {
      return link.color;
    })
    .attr("marker-end", "url(#arrow)");

  const foreignLineScoreOutline = svg
    .selectAll(".foreign-connection-score-outline")
    .data(foreignLinks)
    .enter()
    .append("circle")
    .attr("class", (link: any) =>
      listToString([
        "svg-object",
        "foreign-connection-score-outline",
        link.target.name,
        link.target.masterId,
        `level-${link.target.level}`,
      ])
    )
    .attr("r", 18)
    .attr("fill", "#ffffff")
    .attr("stroke", "#a8a8a8")
    .attr("storke-width", 5);

  const foreignLineScore = svg
    .selectAll(".foreign-connection-score")
    .data(foreignLinks)
    .enter()
    .append("circle")
    .attr("class", (link: any) =>
      listToString([
        "svg-object",
        "foreign-connection-score",
        link.target.name,
        link.target.masterId,
        `level-${link.target.level}`,
      ])
    )
    .attr("r", 15)
    .attr("fill", "#1b1b1b");
  // .attr("marker-end", "url(#arrow)");

  const foreignLineScoreText = svg
    .selectAll(".foreign-connection-score-text")
    .data(foreignLinks)
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("class", (link: any) =>
      listToString([
        "svg-object",
        "foreign-connection-score-text",
        link.target.name,
        link.target.masterId,
        `level-${link.target.level}`,
      ])
    )
    .attr("fill", "#ffffff")
    .text((link: any) => link.score ?? "?");

  const circles_0 = svg
    .selectAll(".circle-0")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", (node: any) => node.size * 1.1 || 30)
    .attr("fill", (node: any) => node.color)
    .attr("class", (node: any) =>
      listToString([
        "svg-object",
        node.name,
        node.masterId,
        `parent1-${`parent-${node.parentId}`}` ?? "",
        "circle-0",
        `level-${node.level}`,
        // "hidden",
      ])
    )
    .attr("stroke", (node: any) => addOpacityInRGB(node.color, 0.5))
    .attr("stroke-width", "8");

  ////// DATA QUALITY START ///////
  let data = [0.6, 0.3, 0.1];
  // Creating Pie generator
  let piechart = pie();

  // Creating arc
  let arcchart: any = (outerRadius: number) => {
    let temp = arc().innerRadius(0).outerRadius(outerRadius);
    // console.log(temp())
    return temp;
  };

  // Piechart
  const pieChart = svg
    .selectAll(".pie-chart")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", (node: any) =>
      listToString([
        "svg-object",
        node.name,
        node.masterId,
        `level-${node.level}`,
        `parent-${node.parentId}` ?? "",
        "pie-chart",
        "data-quality",
        // "hidden",
      ])
    )
    .style("display", "none");

  // Grouping different arcs
  let arcs = pieChart.selectAll("arc").data(piechart(data)).enter().append("g");

  // Appending path
  arcs
    .append("path")
    .attr("fill", (_: any, i: number) => {
      return DATAQUALITYCOLORS[i];
    })
    // .attr("d", arcchart(70));
    .attr("d", (x: any, i: any, j: any) => {
      let data: any = select(j[i].parentNode.parentNode).datum();
      return arcchart(data.size * 1.3)(x);
    });

  ////// DATA QUALITY END ///////

  const circles_1 = svg
    .selectAll(".circle-1")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", (node: any) => node.size)
    .attr("fill", "#1b1b1b")
    .attr("class", (node: any) =>
      listToString([
        "svg-object",
        node.name,
        node.masterId,
        `parent-${node.parentId}` ?? "",
        "circle-1",
        `level-${node.level}`,
        // "hidden",
      ])
    );

  const images = svg
    .selectAll("image")
    .data(nodes)
    .enter()
    .append("image")
    .attr("xlink:href", (node: any) => getSvg(node.icon))
    .attr("width", (node: any) => node.size * 1.1)
    .attr("height", (node: any) => node.size * 1.1)
    .attr(
      "transform",
      (node: any) =>
        `translate(-${(node.size * 1.1) / 2}, -${(node.size * 1.1) / 2})`
    )
    .attr("class", (node: any) =>
      listToString([
        "svg-object",
        node.name,
        node.masterId,
        `parent-${node.parentId}` ?? "",
        `level-${node.level}`,
        // "hidden",
      ])
    );

  const textBackground = svg
    .selectAll(".textBackground")
    .data(nodes)
    .enter()
    .append("rect")
    .attr("class", (node: any) =>
      listToString([
        "svg-object",
        "textBackground",
        node.name,
        node.masterId,
        `parent-${node.parentId}` ?? "",
        `level-${node.level}`,
      ])
    )
    .attr("fill", textBackgroudColor)
    .attr("height", 20)
    .attr("width", (node: any) => clipText(node.name, node.type).length * 8)
    .attr(
      "transform",
      (node: any) =>
        `translate(${-(clipText(node.name, node.type).length * 8) / 2}, ${
          node.size * 1.1 + 7
        })`
    );

  const texts = svg
    .selectAll(".node-name")
    .data(nodes)
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", "white")
    .attr("class", (node: any) =>
      listToString([
        "svg-object",
        "node-name",
        node.name,
        node.masterId,
        `parent-${node.parentId}` ?? "",
        `level-${node.level}`,
      ])
    )
    .style("pointer-events", "none")
    .text((node: any) => clipText(node.name, node.type))
    .attr("transform", (node: any) => `translate(0, ${node.size * 1.1 + 15})`);

  const circleWrapper = svg
    .selectAll(".circle-wrapper")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", (node: any) => node.size * 1.1 + 5 || 30)
    .attr("fill", "transparent")
    .attr("class", (node: any) =>
      listToString([
        "svg-object",
        node.name,
        node.masterId,
        `parent-${node.parentId}` ?? "",
        "circle-wrapper",
        "cursor-pointer",
        `level-${node.level}`,
      ])
    )
    .attr("stroke", (node: any) => node.color)
    .attr("stroke-width", 0)
    .on("mouseover", function (event, node: any) {
      select(this).transition().duration(100).attr("stroke-width", 2);
      updateTooltip(true, event.pageX, event.pageY, node.name);
    })
    .on("mousemove", function (event, node: any) {
      updateTooltip(true, event.pageX, event.pageY, node.name);
    })
    .on("mouseleave", function () {
      select(this).transition().duration(100).attr("stroke-width", 0);
      updateTooltip(false);
    })
    .on("contextmenu", function (event, node: any) {
      event.preventDefault();
      showContextMenu(event.pageX, event.pageY + node.size, node.masterId);
    })
    .call(dragInteraction);

  simulation.on("tick", () => {
    circles_1
      .attr("cx", function (node: any) {
        return node.x;
      })
      .attr("cy", function (node: any) {
        return node.y;
      });
    circles_0
      .attr("cx", function (node: any) {
        return node.x;
      })
      .attr("cy", function (node: any) {
        return node.y;
      });
    pieChart.attr("transform", function (node: any) {
      return `translate(${node.x},${node.y})`;
    });
    circleWrapper
      .attr("cx", function (node: any) {
        return node.x;
      })
      .attr("cy", function (node: any) {
        return node.y;
      });
    // circles
    //   .attr("cx", (node: any) => node.x)
    //   .attr("cy", (node: any) => node.y);

    lines
      .attr("x1", (link: any) => link.source.x)
      .attr("y1", (link: any) => link.source.y)
      // .attr("x2", (link: any) => link.target.x)
      // .attr("y2", (link: any) => link.target.y)
      .attr("x2", (link: any) =>
        getTargetXY(
          link.target.x,
          link.target.y,
          link.source.x,
          link.source.y,
          link.target.size,
          "x"
        )
      )
      .attr("y2", (link: any) =>
        getTargetXY(
          link.target.x,
          link.target.y,
          link.source.x,
          link.source.y,
          link.target.size,
          "y"
        )
      );

    foreignLines
      .attr("x1", (link: any) => link.source.x)
      .attr("y1", (link: any) => link.source.y)
      // .attr("x2", (link: any) => link.target.x)
      // .attr("y2", (link: any) => link.target.y);
      .attr("x2", (link: any) =>
        getTargetXY(
          link.target.x,
          link.target.y,
          link.source.x,
          link.source.y,
          link.target.size,
          "x"
        )
      )
      .attr("y2", (link: any) =>
        getTargetXY(
          link.target.x,
          link.target.y,
          link.source.x,
          link.source.y,
          link.target.size,
          "y"
        )
      );

    foreignLineScore
      .attr("cx", function (link: any) {
        return (link.target.x + link.source.x) / 2;
      })
      .attr("cy", function (link: any) {
        return (link.target.y + link.source.y) / 2;
      });

    foreignLineScoreOutline
      .attr("cx", function (link: any) {
        return (link.target.x + link.source.x) / 2;
      })
      .attr("cy", function (link: any) {
        return (link.target.y + link.source.y) / 2;
      });

    foreignLineScoreText
      .attr("x", function (link: any) {
        return (link.target.x + link.source.x) / 2;
      })
      .attr("y", function (link: any) {
        return (link.target.y + link.source.y) / 2;
      });

    images.attr("x", (node: any) => node.x).attr("y", (node: any) => node.y);
    textBackground
      .attr("x", (node: any) => node.x)
      .attr("y", (node: any) => node.y);
    texts.attr("x", (node: any) => node.x).attr("y", (node: any) => node.y);
  });
}
