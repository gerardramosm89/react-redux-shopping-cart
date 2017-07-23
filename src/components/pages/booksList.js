import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';

class BooksList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  renderBooks() {
    return this.props.books.map(book => {
      return(
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>{book.price}</p>
        </div>
      );
    })
  }
  render() {
    return(
      <div>
        <h1>Hello React</h1>
        {this.renderBooks()}
      </div>
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