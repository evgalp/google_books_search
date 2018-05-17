import React, { Component } from "react";
import { Grid, Row, Col, Panel } from "react-bootstrap";

export default class Books extends Component {
  render() {
    let bookItems;
    if (this.props.books) {
      bookItems = this.props.books.map(book => {
        return (
          <Panel key={book.id} bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
                {book.volumeInfo.title}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Grid>
                <Row>
                  <Col s={12} md={3} className="mb-4">
                    {/* <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt="thumbnail"
                    /> */}
                  </Col>
                  <Col s={12} md={8}>
                    <div className="text-left">
                      <div className="info-row">
                        <strong>Title: </strong>
                        <span>{book.volumeInfo.title}</span>
                      </div>
                      <div className="info-row">
                        <strong>Author: </strong>
                        <span>{book.volumeInfo.authors}</span>
                      </div>
                      <div className="info-row text-justify">
                        <strong>Description: </strong>
                        <span className="">{book.volumeInfo.description}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </Panel.Body>
          </Panel>
        );
      });
    }
    return <div>{bookItems}</div>;
  }
}
