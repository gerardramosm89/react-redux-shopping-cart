import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OverlayTrigger, Popover, Tooltip, Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { addToCart, deleteCartItem, addQuantityToCartItem, subtractQuantityToCartItem } from '../../actions/cartActions';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleDelete(_id) {
    this.props.deleteCartItem(_id);
  }

  addQuantity(_id) {
    this.props.addQuantityToCartItem(_id);
  }
  subtractQuantity(_id) {
    this.props.subtractQuantityToCartItem(_id);
  }
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
            <Col xs={12} sm={2}>
              <h6>{cartItem.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle='success'>{cartItem.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{ minWidth:'30px'}}>
                <Button onClick={this.subtractQuantity.bind(this, cartItem._id)} bsStyle='default' bsSize='small'>-</Button>
                <Button onClick={this.addQuantity.bind(this, cartItem._id)} bsStyle='default' bsSize='small'>+</Button>
                <span>     </span>
                <Button onClick={this.handleDelete.bind(this, cartItem._id)} bsStyle='danger' bsSize='small'>Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
        );
      });
    }
  }
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Everything in your cart</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Panel header='Cart' bsStyle='primary'>
          {this.renderCart()}
          <Row>
            <Col xs={12}>
              <h6>Total amount: </h6>
              <Button 
              bsStyle='primary' 
              bsSize='small'
              onClick={this.open.bind(this)}
              >Proceed to checkout</Button>
            </Col>
          </Row>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem,
    addQuantityToCartItem,
    subtractQuantityToCartItem
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);