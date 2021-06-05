import axios from "axios";
import React, { useState, Component } from "react";
import TableDisplay from "./TableData";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import TableHeader from "./TableHeader";
import orderBy from "lodash/orderBy";

const updateSort = {
  asc: "desc",
  desc: "asc",
};

export default class TableBody extends Component {
  state = {
    results: [{}],
    filteredResults: [{}],
    columnToSort: "name",
    sortDirection: "asc",
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20&nat=us").then((res) => {
      var final = res.data.results.map(
        ({ name, picture, email, phone, dob }) => ({
          name: name.first + " " + name.last,
          picture: picture.medium,
          email,
          phone,
          dob: dob.date,
        })
      );
      console.log(final);
      this.setState({
        results: final,
        filteredResults: res.data.results,
      });
    });
  }

  dataSearch = () => {
    let { searchInput } = this.state;
    let filteredResults = this.props.results.filter((value) => {
      return (
        value.Name.toLowerCase()
          .includes(searchInput.toLowerCase())
          // value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
          // value.visits
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });

    this.props.handleSetData(filteredResults);
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.dataSearch(this.state.search);
  };

  sortData = (columnName) => {
    this.setState((state) => ({
      columnToSort: columnName,
      sortDirection:
        // state.columnToSort === columnName
        state.sortDirection === "asc"
          ? // ? updateSort[state.sortDirection]
            "desc"
          : "asc",
    }));
  };

  render() {
    // let {filteredResults} = this.state

    console.log(
      "SORTED",
      orderBy(
        this.state.results,
        [this.state.columnToSort],
        [this.state.sortDirection]
      )
    );
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">
              Click on each header to sort the column or use the search box to
              narrow your results.
            </p>
          </div>
        </div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={(e) =>
            this.setState({ [e.target.name]: e.target.value })
          }
        />
        <table className="table">
          <TableHeader sortData={this.sortData} />

          <TableDisplay
            sortData={this.sortData}
            data={orderBy(
              this.state.results,
              [this.state.columnToSort],
              [this.state.sortDirection]
            )}
            results={this.state.results}
          />
        </table>
      </div>
    );
  }
}
