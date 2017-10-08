import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';

class Menu extends Component {
  render() {
    return(
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Redux Cart</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/contact">Contact Us</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin">Admin</NavItem>
            <NavItem eventKey={2} href="/cart">Cart
            {this.props.totalCartQuantity > 0 ? (<Badge className="badge">{this.props.totalCartQuantity}</Badge>) : null }
            
            
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    totalCartQuantity: state.cart.cartQuantity
  }
}

export default connect(mapStateToProps, null)(Menu);