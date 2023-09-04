import React from "react";
import AddColumn from "./components/AddColumn";
import Icons from "@/components/icons/Icons";
import { TGlossary } from "@/types/glossary";

interface IProps {
  glossary: TGlossary[];
  setGlossary: React.Dispatch<React.SetStateAction<TGlossary[]>>;
  onClose: () => void;
}

function getGlosaryTemplate(
  name: string,
  type: "table" | "column",
  table: string = ""
) {
  let masterId = `${table}-${name}`;
  return {
    masterId,
    technicalName: name,
    name: name,
    type: type,
    invalidCount: 0,
    nullCount: 0.7,
    validCount: 1,
    dataTypes: ["Integer", "weight"],
    bussinessGlossary: '"Geolocation data for Brazilian zip codes."',
    tags: ["longitude", " location_longitude", " geo_longitude"],
  } as TGlossary;
}

export default function AddNode(props: IProps) {
  const handleAddColumn = (table: string, columnName: string) => {
    let node: TGlossary = getGlosaryTemplate(columnName, "column", table);
    let tempGlossary = props.glossary.map((tables) => {
      if (tables.masterId == table) {
        tables.subset?.push(node);
      }
      return tables;
    });
    console.log(tempGlossary);
    props.setGlossary(tempGlossary);
    props.onClose();
  };

  return (
    <div className="p-3 text-white rounded bg-slate-700">
      <div className="flex justify-end">
        <button type="button" onClick={props.onClose}>
          <Icons icon={"close"} className="w-3 h-3" />
        </button>
      </div>

      <div>
        <AddColumn
          glossary={props.glossary}
          handleAddColumn={handleAddColumn}
        />
      </div>
    </div>
  );
}
