import { TGlossary } from "@/types/glossary";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface IProps {
  handleAddColumn: (table: string, columnName: string) => void;
  glossary: TGlossary[];
}

export default function AddColumn(props: IProps) {
  const [table, setTable] = React.useState("");
  const [columnName, setColumnName] = React.useState("");

  const handleChange = (e: SelectChangeEvent<string>) => {
    e.preventDefault();
    setTable(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (table == "" || columnName == "") return
    props.handleAddColumn(table, columnName)
  }

  return (
    <div className="mt-3 text-white">
      <form action="" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="domain" sx={{ color: "#ffffff" }}>
            Table
          </InputLabel>
          <Select
            sx={{ color: "#ffffff" }}
            labelId="table"
            id="table-select"
            value={table}
            label="table"
            onChange={handleChange}
          >
            {props.glossary.map((data, index) => (
              <MenuItem key={index} value={data.masterId}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Column name"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            className="p-3 bg-transparent border border-gray-800"
          />
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="w-full px-5 py-2 text-white bg-gray-800 hover:bg-gray-900"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
