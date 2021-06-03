import React from "react";


  function TableDisplay({ results }) {
  

    return (
      
      
    <table class="table">
     <thead>
      <tr>
     
        <th scope="col">Image</th>
        {/* <th scope="col"><div> onClick={() => sortData(column)}</div>
           Name</th> */}
           <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
    <tbody>
    
      { (results.length > 0) ? results.map( (item, index) => {
        return (
          
          <tr key={ index }>
            <td><img src={ item.picture}></img></td>
            <td>{ item.name}</td>
            <td>{ item.phone}</td>
            <td>{ item.email}</td>
            <td>{ item.dob}</td> 
          </tr>
        )
      }) : <tr><td colSpan='5'> Loading... </td></tr>
      
    }
   
    </tbody>
  </table>
    
    )}

export default TableDisplay
