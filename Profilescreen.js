import React, { useContext, useReducer, useState } from 'react'
import { Store } from '../Store';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_REQUEST' :
            return{...state, loadingUpdate: true};
        case 'UPDATE_SUCCESS' :
           return{...state, loadingUpdate: false};
         case 'UPDATE_FAIL' :
           return{...state, loadingUpdate: false};
           default :
           return state;
    }
}


export default function Profilescreen() {
    const {state, dispatch: ctxDispatch } = useContext(Store);
    const {userInfo} = state;
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState(' ');
    const [confirmPassword, setConfirmPassword] = useState(' ');

const [{ loadingUpdate}, dispatch] =useReducer(reducer, {
    loadingUpdate: false,
})

    const submitHandler= async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put (
                'api/users/profile',
                {
                    name,
                    email,
                    password,
                },
                {
                    headers: { Authorization: `Bearer ${userInfo.token}`},
                }
            );
            dispatch({
                type: 'UPDATE_SUCCESS',
            });
            ctxDispatch({type: 'USER_SIGNIN', payload: data});
            localStorage.setItem('userInfo', JSON.stringify(data));
            alert('user updated successfully');
            
         } catch (err) {
                dispatch ({
                    type: 'FETCH_FAIL',
                });
                alert('error');
        }
     };
  return (
   <div className='container small-container'>
       <title>User profile</title>
       <h1 className='my-3'>User Profile</h1>
       <Form onSubmit={submitHandler}>

           <Form.Group className="mb-3" controlId="name">
               <Form.Label>Name</Form.Label>
               <Form.Control value={name} onChange={(e) => setName(e.target.value)}
               requied />
           </Form.Group>

           <Form.Group className="mb-3" controlId="email">
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}
               requied />
           </Form.Group>

           <Form.Group className="mb-3" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}
               requied />
           </Form.Group>

           <Form.Group className="mb-3" controlId="confirmPassword">
               <Form.Label>Confirm Password</Form.Label>
               <Form.Control type="password" onChange={(e) => setConfirmPassword(e.target.value)}
               requied />
           </Form.Group>
           <div className='mb-3'>
               <Button type="submit">Update</Button>
           </div>
       </Form>
   </div>
  )
}