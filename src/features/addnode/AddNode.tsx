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
  domain: string = "",
  table: string = ""
) {
  let masterId = "";
  if (type == "table") {
    masterId = `${domain}-${name}`;
  } else {
    masterId = `${domain}-${table}-${name}`;
  }
  return {
    id: 60,
    masterId,
    technicalName: name,
    name: name,
    type: type,
    invalidCount: 0,
    nullCount: 0.7,
    validCount: 1,
    dataType: ["Integer", "weight"],
    businessGlossary: '"Geolocation data for Brazilian zip codes."',
    sampleData:
      "[-56.09008999 -49.63474141 -46.63999405 -43.32132773 -46.89802593\n -43.35976936 -35.00488273 -41.66879284 -41.83417386 -54.48123702\n -35.70005661 -43.32792926 -38.35016462 -46.67487716 -42.55028911\n -43.06368362 -45.46378979 -36.48853075 -46.40040575 -46.56904406]",
    tags: ["longitude", " location_longitude", " geo_longitude"],
  } as TGlossary;
}

export default function AddNode(props: IProps) {
  const handleAddColumn = (table: string, columnName: string) => {
    let node: TGlossary = getGlosaryTemplate(columnName, "column", table);
    let tempGlossary = props.glossary.map((tables) => {
      if (tables.masterId == table) {
        console.log("here")
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
