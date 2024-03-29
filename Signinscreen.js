 import Axios from 'axios';
 import './Signin.css';
 import Container from 'react-bootstrap/Container'
 import { Link, useLocation, useNavigate} from 'react-router-dom';
 import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from 'react';
import {Store} from '../Store';
import Button from 'react-bootstrap/Button';

export default function Signinscreen () {
     const navigate = useNavigate();
     const { search} = useLocation();
     const redirectInUrl = new URLSearchParams(search).get('redirect');
     const redirect = redirectInUrl ? redirectInUrl : '/';

     const [email, setEmail] = useState(' ');
     const [password, setPassword] = useState(' ');

     const {state, dispatch: cxtDispatch } = useContext(Store);
     const {userInfo} = state;
     const submitHandler = async (e) => {
         e.preventDefault();
         try {
             const {data} = await Axios.post('/api/users/signin', {
                 email,
                 password,
             });
             cxtDispatch({type: 'USER_SIGN', payload: data})
             localStorage.setItem('userInfo', JSON.stringify(data));
             navigate(redirect || '/');
         }catch (err) {
         }
     }
useEffect (() => {
    if (userInfo) {
        navigate(redirect);
    }
}, [navigate, redirect, userInfo]);
     return (
         <div>
 <Container>
         <title>Sign In</title>
         <Form onSubmit={submitHandler}>
         <h1>Sign In</h1>
         
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control className="form-input"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
  </Form.Group>
  <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control className="form-input"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
  </Form.Group>
    <div className="mb-3">
    <Button type='submit' variant="outline-primary">Sign In</Button>{' '}
    </div>
  <div className="mb-3">
  New customer? {' '}
  <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
  </div>
</Form>
     </Container>
         </div>
    
     );
 }
