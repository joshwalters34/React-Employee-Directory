import React from "react";

function TableDisplay({ data }) {
  return (
    <tbody classname="pl-5">
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img alt="Employee" src={item.picture}></img>
              </td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="5"> Loading... </td>
        </tr>
      )}
    </tbody>
  );
}

export default TableDisplay;
