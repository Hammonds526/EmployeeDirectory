import React from "react";
// import TableRows from "./TableRows";
import "../styles/Table.css"

function Table(props) {
  console.log("Table Data");
  console.log(props.data);
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>ID</th>
        </tr>
      </thead>
      
      <tbody>
        
      <tr>
        <td>Image Here</td>
        <td>Garth Hammonds</td>
        <td>(555)123-4567</td>
        <td>email@email.com</td>
        <td>05-26-1993</td>
    </tr>

    {props.data.results.map(rows => 
    <tr>
      <td><img src={rows.picture.thumbnail} alt='img Thumbnail'/></td>
      <td>{rows.name.first} {rows.name.last}</td>
      <td>{rows.phone}</td>
      <td>{rows.email}</td>
      <td>{rows.id.value}</td>
    </tr>
    )}
      </tbody>
    </table>
      
        
  );
}

export default Table;
