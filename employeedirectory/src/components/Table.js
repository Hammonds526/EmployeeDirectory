import React from "react";
import TableRows from "./TableRows";
import "../styles/Table.css"

function TableHeader() {
  return (
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
        
  );
}

export default TableHeader;
