import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';

import BookItem from './bookItem';
import BooksForm from './booksForm';

// Bootstrap styles
import { Grid, Col, Row, Button } from 'react-bootstrap';

class BooksList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  renderBooks() {
    return this.props.books.map(book => {
      return(
        <Col xs={12} sm={6} md={4} key={book.id}>
          <BookItem 
            id={book.id}
            title={book.title}
            description={book.description}
            price={book.price}
          />
        </Col>
      );
    })
  }
  render() {
    return(
      <Grid>
        <Row style={{marginTop: '15px'}}>
          <Col xs={12} md={6}>
            <BooksForm />
          </Col>
          {this.renderBooks()}
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books.books }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { getBooks }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);