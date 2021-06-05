import React from "react";

function TableHeader(props) {
  return (
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col" id="Name">
          <div onClick={() => props.sortData("name")}>
            {/* <th scope="col"><div onClick={this.sortData.bind(this)}></div> */}
            Name
          </div>
        </th>

        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
