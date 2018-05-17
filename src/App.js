import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import axios from "axios";

import Header from "./components/Header";
import Books from "./components/Books";
import Search from "./components/Search";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searchText: "World"
    };
  }

  componentWillMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .request({
        method: "get",
        url:
          "https://www.googleapis.com/books/v1/volumes?q=" +
          this.state.searchText
      })
      .then(res => {
        this.setState({ books: res.data.items }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  handleChange(text) {
    this.setState({ searchText: text }), this.getBooks();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12}>
              <Search
                value={this.state.searchText}
                onChange={this.handleChange.bind(this)}
              />
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
