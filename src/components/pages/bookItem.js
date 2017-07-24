import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Well, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { addToCart, addQuantityToCartItem } from '../../actions/cartActions';

class BookItem extends Component {

  handleCart() {
    const book = {
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
      quantity: 1
    };
    let cartItemIndex = this.props.cart.findIndex(cartItem => cartItem._id == this.props._id);
    if (cartItemIndex < 0) this.props.addToCart(book);
    else this.props.addQuantityToCartItem(this.props._id);
  }
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>usd. {this.props.price}</h6>
            <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Add to cart</Button>
          </Col>
        </Row>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart, addQuantityToCartItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);