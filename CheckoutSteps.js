import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Checkoutsteps.css';
export default function CheckoutSteps(props) {
    return (
        <Row className="checkout-steps">
            <Col className={props.step1 ? 'active' : ""}>Sign-In</Col>
            <Col className={props.step1 ? 'active' : ""}>Shipping</Col>
            <Col className={props.step1 ? 'active' : ""}>Payment</Col>  
            <Col className={props.step1 ? 'active' : ""}>Place Order</Col>
        </Row>
    )
}