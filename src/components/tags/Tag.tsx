import React from "react";

interface IProps {
  children: React.ReactNode;
}
export default function Tag(props: IProps) {
  return (
    <p className="p-2 m-1 text-xs rounded bg-skin-dark">
      {props.children}
    </p>
  );
}
