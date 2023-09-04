import Tag from "@/components/tags/Tag";
import Icons from "@/components/icons/Icons";
import React, { HTMLAttributes } from "react";
import AddTags from "@/components/tags/AddTags";
import { TGlossary } from "@/types/glossary";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { glossary_data } from "../canvas/data/glossary";

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  dataType: string;
}
const Header = ({ name, dataType, ...props }: IHeaderProps): JSX.Element => {
  return (
    <div {...props}>
      <div className="flex justify-between">
        <div>
          <p className="text-skin-muted">Attribute Name</p>
          <p>{name}</p>
        </div>
        <div>
          <p className="text-skin-muted">
            <span className="mr-1 text-sm text-skin-primary align-super">
              AI
            </span>
            Data Type
          </p>
          <p>{dataType}</p>
        </div>
      </div>
    </div>
  );
};

interface IGlossaryProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}
const Glossary = ({ content, ...props }: IGlossaryProps) => {
  return (
    <div {...props}>
      <p className="text-skin-muted">
        <span className="mr-1 text-sm text-skin-primary align-super">AI</span>
        Business Glossary
      </p>
      <p className="p-2 rounded bg-skin-dark">{content}</p>
    </div>
  );
};

interface ITagsProps extends HTMLAttributes<HTMLDivElement> {
  tags: string[];
}
const Tags = ({ tags, ...props }: ITagsProps) => {
  return (
    <div {...props}>
      <p className="text-skin-muted">
        <span className="mr-1 text-sm text-skin-primary align-super">AI</span>
        Business Tags
      </p>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        <AddTags addTags={() => {}} />
      </div>
    </div>
  );
};

interface IQualityProps extends HTMLAttributes<HTMLDivElement> {
  nulls?: number | undefined;
  invalid?: number | undefined;
  valid?: number | undefined;
}
const Quality = ({ nulls, invalid, valid, ...props }: IQualityProps) => {
  const items = (title: string, value: number | undefined, color: string) => {
    return (
      <div className="flex flex-col items-center">
        <p>{title}</p>
        <p className={`p-1 rounded-full text-xs ${color}`}>
          {value ? `${value}%` : "NA"}
        </p>
      </div>
    );
  };

  return (
    <div {...props}>
      <p className="text-skin-muted">Data Quality</p>
      <div className="flex justify-between">
        {items("Nulls", nulls, "bg-skin-secondary")}
        {items("Invalid", invalid, "bg-skin-danger")}
        {items("Valid", valid, "bg-skin-success")}
      </div>
    </div>
  );
};

// interface IImportanceProps extends HTMLAttributes<HTMLDivElement> {
//   importance: string;
// }
// const Importance = ({ importance, ...props }: IImportanceProps) => {
//   return (
//     <div {...props}>
//       <div className="flex flex-col items-center">
//         <p className="text-skin-muted">Importance</p>
//         <p>{importance}</p>
//         <Icons className="w-5 h-5" icon="importance" />
//       </div>
//     </div>
//   );
// };

interface ISampleProps extends HTMLAttributes<HTMLDivElement> {
  datas: string[];
  text: string;
}
const Sample = ({ datas, text, ...props }: ISampleProps) => {
  return (
    <div {...props}>
      <p className="text-skin-muted">Sample Data</p>
      {/* <div className="flex flex-wrap">
        {datas.map((data, index) => (
          <p key={index}>{`${data},`}</p>
        ))}
      </div> */}
      <p>{text}</p>
    </div>
  );
};

interface IProps {
  open: boolean;
  x: number;
  y: number;
  handleClose: () => void;
  glossaryId: string;
}

function getSpecificGlossary(glossary: TGlossary[], masterId: string) {
  for (let i = 0; i < glossary.length; i++) {
    if (glossary[i].masterId == masterId) {
      return glossary[i];
    }
    let sub = glossary[i].subset;
    if (sub) {
      for (let j = 0; j < sub.length; j++) {
        if (sub[j].masterId == masterId) {
          return sub[j];
        }
      }
    }
  }
}

export default function NodeDescriptionCard(props: IProps) {
  const contextMenuRef = React.useRef<HTMLDivElement | null>(null);
  const [nodeGlossary, setNodeGlossary] = React.useState<TGlossary | null>(
    null
  );
  useOnClickOutside(contextMenuRef, props.handleClose);
  const glossary = glossary_data

  React.useEffect(() => {
    if (glossary) {
      setNodeGlossary(getSpecificGlossary(glossary, props.glossaryId) ?? null);
    }
  }, [props.glossaryId]);

  return (
    props.open && (
      <div
        ref={contextMenuRef}
        className="fixed z-50 text-sm text-white rounded shadow-sm w-80 bg-slate-700"
        style={{ left: `${props.x}px`, top: `${props.y}px` }}
      >
        <div className="flex justify-end p-1">
          <button onClick={props.handleClose} type="button" className="">
            <Icons className="w-3 h-3" icon="close" />
          </button>
        </div>
        <div className="px-3">
          <Header
            className="pb-1"
            name={nodeGlossary?.name ?? ""}
            dataType={nodeGlossary?.type == "table" ? "Table" : `${nodeGlossary?.dataType[0]} | ${nodeGlossary?.dataType[1]}`}
          />
          <Glossary
            className="py-1"
            content={nodeGlossary?.businessGlossary ?? ""}
          />
          <Tags
            className="py-1"
            tags={nodeGlossary?.tags.filter((tag) => tag.length > 20) ?? []}
          />
          <div className="flex justify-between py-1">
            <Quality
              className="grow me-20"
              nulls={nodeGlossary?.nullCount}
              invalid={nodeGlossary?.invalidCount}
              valid={nodeGlossary?.validCount}
            />
            {/* <Importance importance="medium" /> */}
          </div>
          <Sample
            className="py-1"
            datas={[
              "ab78397",
              "ch73874",
              "ab37476",
              "mn83474",
              "st48379",
              "el73863",
            ]}
            text={nodeGlossary?.sampleData ?? ""}
          />
        </div>
      </div>
    )
  );
}
