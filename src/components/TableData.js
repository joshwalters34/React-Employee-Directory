import React from "react";
import axios from "axios";

// const getResults = () =>
// axios.get('https://randomuser.me/api/?results=10').then(res =>
//   res.data.results.map(({name, picture, email, phone, dob}) => ({
//     name: name,
//     image: picture,
//     email: email,
//     phone: phone,
//     DOB: dob
//   }))
//   );

  function TableDisplay({ results }) {
  //   axios.get('https://randomuser.me/api/?results=10').then(res =>
  // res.data.results.map(({name, picture, email, phone, dob}) => ({
  //   name: name,
  //   image: picture,
  //   email: email,
  //   phone: phone,
  //   DOB: dob
  // }))
  // );
    return (
    <table class="table">
    <thead>
      <tr>
     
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
    <tbody>
      { (results.length > 0) ? results.map( (results, index) => {
        return (
          <tr key={ index }>
            <td>{ results.picture.medium}</td>
            <td>{ results.name.first}</td>
            <td>{ results.phone}</td>
            <td>{ results.email}</td>
            <td>{ results.dob}</td> 
          </tr>
        )
      }) : <tr><td colSpan='5'> Loading... </td></tr>
    }
   
       
    </tbody>
  </table>
    
    )}

export default TableDisplay;
