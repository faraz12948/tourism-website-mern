import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut,name} = useAuth();
    // console.log(user)
    
    return (
        
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="bg-success"  >
                <Container>
                <Navbar.Brand as = {Link} to="/" >Trav<span>elo</span></Navbar.Brand>

                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  
                   <Navbar.Collapse id="responsive-navbar-nav">

                  
                  <Nav className="me-auto">
                  <Nav.Link as = {Link} to="/home">Home</Nav.Link>
                  {/* <Nav.Link as = {Link} to="/services">Services</Nav.Link>
                  
                  <Nav.Link as = {Link} to="/about">About</Nav.Link>
                  <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
                  <Nav.Link as = {Link} to="/shop">Shop</Nav.Link> */}
                  
                  {
                     
                     (user.email)?

                     <>
                     <Nav.Link as = {Link} to="/manage">Manage all orders</Nav.Link>
                     <Nav.Link as = {Link} to='/myorders'>My Orders</Nav.Link>
                     <Nav.Link as = {Link} to='/addservice'>Add service</Nav.Link>
                     </>
                    
                    
                     :
                    ''
                 }
                 

            






                 </Nav>
                 {
                     (user.email)?<p style={{color:"white"}}>logged in as :{user.displayName}</p>:<p></p>
                 }

                 {
                     
                     (user.email)?
                    <NavLink to="/login"><Button variant="outline-light" style={{margin:"20px"}} onClick={logOut}>Log out</Button></NavLink>:
                    <NavLink to="/login" ><Button variant="outline-light" >Log in</Button></NavLink>
                 }
                 
                 
                 

                </Navbar.Collapse>

                </Container>
            </Navbar>
    );
};

export default Header;