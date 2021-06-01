/* eslint-disable no-dupe-class-members */
import axios from "axios";
import React, { useState, Component } from "react";
import TableDisplay from "./TableData"
import API from "../utils/API";
import SearchForm from "./SearchForm";

const getResults = () =>
axios.get('https://randomuser.me/api/?results=100&nat=us').then(res =>
  res.data.results.map(({name, picture, email, phone, dob}) => ({
    name: name.first + name.last,
    picture: picture.medium,
    email,
    phone,
    dob: dob.date
  }))
  );

  

class TableBody extends Component {
  
  state = {
    results: [{}]
     };

  componentDidMount () {
    getResults().then(results => {
      this.setState({ 
        results: results.data.results, 
      filteredResults: results.data.results })
    })
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
    
    <TableDisplay 
    results = {this.state.results} />
  
  </tbody>
</table>
</div>
    
    );
  
  
}
}

export default TableBody;
