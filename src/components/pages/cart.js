import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Well, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../actions/cartActions';

class Cart extends Component {
  renderCart() {
    if (this.props.cart.length === 0) {
      return <div>cart is empty</div>
    } else {
      return this.props.cart.map(cartItem => {
        return(
        <Panel key={cartItem.title}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartItem.title}</h6>
            </Col>
          </Row>
        </Panel>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <Panel header='Cart' bsStyle='primary'>
          {this.renderCart()}
        </Panel>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart);