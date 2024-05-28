import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <div
      className="h-[100vh]"
    >
      <div
        className="p-4 pl-16 pr-16 rounded-2xl w-[100%] overflow-hidden h-[100%]"
        //elevation={3}
        
        //  boxShadow: "none",
        
      >
        <p className="flex items-center text-xl m-[2rem] uppercase">
          {heading}
        </p>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{
            height: "80%",
          }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: "matBlack",
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Table;