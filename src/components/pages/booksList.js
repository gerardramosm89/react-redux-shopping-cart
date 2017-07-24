import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

// Bootstrap styles
import { Grid, Col, Row, Button } from 'react-bootstrap';

class BooksList extends Component {
  componentD_idMount() {
    this.props.getBooks();
  }
  renderBooks() {
    return this.props.books.map(book => {
      return(
        <Col xs={12} sm={6} md={4} key={book._id}>
          <BookItem 
            _id={book._id}
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
        <Row>
          <Cart />
        </Row>
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