import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../Components/CheckoutSteps';
function ShippingAddress() {
    const navigate = useNavigate();
const {state, dispatch: ctxDispatch } = useContext(Store);
const {
    userInfo,
    cart: { shippingAddress },
} = state;

    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalode || '');
    useEffect (() => {
        if (!userInfo) {
            navigate('/signin?redirect=/shipping');
        }
    }, [userInfo, navigate])
    const [country, setCountry] = useState(shippingAddress.country || ' ');
    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch ({
        type: 'SAVE_SHIPPING_ADDRESS',
        payload: {
            fullName,
            address,
            city,
            postalCode,
            country,
        },
        });
       localStorage.setItem(
           'shippingAddress',
           JSON.stringify({
               fullName,
               address,
               city,
               postalCode, 
               country,
           })
       );
       navigate('/payment');
        };
        return (
         <div>
        <title>Shipping Address</title>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div className='container small-container'>
        <h1 className='my-3'>Shipping Address</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
                <Form.Control 
                value={fullName}
                onChanmge={(e) => setFullName(e.target.value)}
                required />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                value={address}
                onChanmge={(e) => setAddress(e.target.value)}
                required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control 
                value={city}
                onChanmge={(e) => setCity(e.target.value)}
                required />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control 
                value={country}
                onChanmge={(e) => setPostalCode(e.target.value)}
                required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control 
                value={postalCode}
                onChanmge={(e) => setCountry(e.target.value)}
                required />
            </Form.Group>

            <div className='mb-3'>
                <Button variant="primary" type="submit">
                    Continue
                </Button>
            </div>
        </Form>
        </div>
    </div>
  )
    }

export default ShippingAddress