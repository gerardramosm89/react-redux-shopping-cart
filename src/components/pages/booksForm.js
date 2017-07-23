import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBooks } from '../../actions/booksActions';

class BooksForm extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit() {
    console.log(findDOMNode(this.refs.title).value);
    let book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value,
    }];
    this.props.postBooks(book);
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
      </Well>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooks }, dispatch);
}

export default connect(null, mapDispatchToProps)(BooksForm);