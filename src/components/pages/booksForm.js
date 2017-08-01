import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBooks, deleteBook } from '../../actions/booksActions';

class BooksForm extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit() {
    let book = [{
      _id: this.props.books.length + 2,
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value,
    }];
    this.props.postBooks(book);
  }
  renderBooks() {
    return this.props.books.map(book => {
      return(
        <option key={book._id} value={book._id}>{book.title}</option>
      );
    })
  }
  onDelete() {
    let bookId = findDOMNode(this.refs.delete).value;
    if (bookId != 'select') {
      this.props.deleteBook(bookId);
    }
  }
  render() {
    return(
      <Well>
        <Panel>
          <FormGroup controlId='title'>
            <ControlLabel>Title</ControlLabel>
            <FormControl 
              type='text'
              placeholder='Enter Title'
              ref='title'
            />
            <ControlLabel>Description</ControlLabel>            
            <FormControl 
              type='text'
              placeholder='Enter description'
              ref='description'
            />
            <ControlLabel>Price</ControlLabel>            
            <FormControl 
                type='text'
                placeholder='Enter price'
                ref='price'
              />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle='primary'>Save</Button>
        </Panel>
        <Panel style={{marginTop: '25px'}}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a book to delete</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">select</option>
              {this.renderBooks()}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete Book</Button>
        </Panel>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooks, deleteBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);