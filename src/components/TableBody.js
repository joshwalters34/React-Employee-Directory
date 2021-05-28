import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class TableBody extends Component {
  state = {
    name: "",
    image: "",
    email: "",
    phone: "",
    DOB: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
  
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  

  // getUsers = () => {
  //   API.search()
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    return (
      <div>
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Employee Directory</h1>
    <p class="lead">Click on each header to sort the column or use the search box to narrow your results.</p>
  </div>
</div>
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
      // <Container>
      //   {/* <Row> */}
      //     <Col size="md-8">
      //       <Card
      //         heading={this.state.result.Title || "Search for a Movie to Begin"}
      //       >
      //         {this.state.result.Title ? (
      //           <MovieDetail
      //             title={this.state.result.Title}
      //             src={this.state.result.Poster}
      //             director={this.state.result.Director}
      //             genre={this.state.result.Genre}
      //             released={this.state.result.Released}
      //           />
      //         ) : (
      //           <h3>No Results to Display</h3>
      //         )}
      //       </Card>
      //     </Col>
      //     <Col size="md-4">
      //       <Card heading="Search">
      //         <SearchForm
      //           value={this.state.search}
      //           handleInputChange={this.handleInputChange}
      //           handleFormSubmit={this.handleFormSubmit}
      //         />
      //       </Card>
      //     </Col>
      //   {/* </Row> */}
      // </Container>
    );
  }
}

export default TableBody;
