/* eslint-disable no-dupe-class-members */
import axios from "axios";
import React, { useState, Component } from "react";
import TableDisplay from "./TableData"
import API from "../utils/API";
import SearchForm from "./SearchForm";
import orderBy from "lodash/orderBy"

const updateSort = {
  asc: "desc",
  desc: "asc"
};
 

  

class TableBody extends Component {
  
  state = {
    results: [{}],
    columnToSort: "",
    sortDirection: ""
     };

 

  componentDidMount () {
    axios.get('https://randomuser.me/api/?results=20&nat=us').then(res =>{
      var final = res.data.results.map(({name, picture, email, phone, dob}) => ({
        name: name.first + name.last,
        picture: picture.medium,
        email,
        phone,
        dob: dob.date
      }))
      console.log(final);
      this.setState({
        results: final,
        filteredResults: res.data.results
      })
    })
  }

  
  

//  dataSearch = () => {
//     const [searchTerm, setSearchTerm] = useState("")
//     // eslint-disable-next-line no-lone-blocks
//     {results.filter((val) => {
//       if (searchTerm == "") {
//         return val
//       } else if (val.name.toLowerCase().includes(searchTerm.lowercase())) {
//         return val
//       }
//       }
//       )}

//   }

//   handleInputChange = event => {
//       const value = event.target.value;
//       const name = event.target.name;
//       this.setState({
//         [name]: value
//       });
//     };
  
//     // When the form is submitted, search the OMDB API for the value of `this.state.search`
//     handleFormSubmit = event => {
//       event.preventDefault();
//       this.dataSearch(this.state.search);
//     };

  sortData = (columnName) => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection: state.columnToSort === columnName ? updateSort[state.sortDirection] : "asc"
    }))
  }

  render() {

  
    return (
      <div>
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Employee Directory</h1>
    <p class="lead">Click on each header to sort the column or use the search box to narrow your results.</p>
  </div>
</div>
<SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          // handleInputChange={this.handleInputChange}
        />

      <table class="table">
     
 
  <tbody>
    <tr>
    
    hea
    <TableDisplay 
    // sortData={this.sortData}
    // data={orderBy(this.state.results, this.state.columnToSort, this.state.sortDirection)}

    results = {this.state.results} />
    </tr>
  
  </tbody>
</table>
</div>

    
    );
  
  
}
}

export default TableBody;
