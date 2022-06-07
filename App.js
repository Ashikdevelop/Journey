import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homescreen from './Screens/Homescreen';
import Productscreen from './Screens/Productscreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useContext, useState } from 'react';
import { Store } from './Store';
import Cartscreen from './Screens/Cartscreen';
import Signinscreen from './Screens/Signinscreen';
import  LinkContainer  from 'react-bootstrap/NavLink';
import Signupscreen from './Screens/Signupscreen';
import Profilescreen from './Screens/Profilescreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };
  
  return (
    <BrowserRouter>
    
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Link className="brand" to="/">
                <h1 className="brand">Journey</h1>
              </Link>
              
              <Nav className='navish'>
                <Link className="nav-link" to="/cart"> 
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              
                {userInfo ? (
               <NavDropdown title={userInfo.name} id="basic-nav-dropdown">   
                 
                    <LinkContainer to ="/profile">

                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                    <NavDropdown.Item> Sign Out </NavDropdown.Item> 
                    </LinkContainer>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
                )}
             
                </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
           
              <Route path="/product/:slug" element={<Productscreen />} />
              <Route path="/cart" element={<Cartscreen />} />
              <Route path="/signin" element={<Signinscreen />} />
              <Route path="/signup" element={<Signupscreen/> } />
              <Route path="/" element={<Homescreen />} />
              <Route path="/profile" element={<Profilescreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
    </BrowserRouter>
  );
}
export default App;