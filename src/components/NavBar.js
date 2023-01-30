import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const NavBar = () => {
    const [activeLink, setActiveLink] =useState('home');
    const [scolled, setScolled] =useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScolled(true)
            }else{
                setScolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => removeEventListener('scroll', onScroll);
    }, [])
     
    const onUpdateActiveLink =(value)=>{
         setActiveLink(value)
    }



    return (
        <Navbar  expand="lg" className={scolled ? 'scolled' : ""}>
        <Container>
          <Navbar.Brand href="#home">Madina Power Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === "home"? "active navbar-link": "navbar-link"} onClick={()=>{onUpdateActiveLink("home")}}>Home</Nav.Link>
              <Nav.Link href="#team" className={activeLink === "team"? "active navbar-link": "navbar-link"} onClick={()=>{onUpdateActiveLink("team")}} >Our Team</Nav.Link>
              <Nav.Link href="#product" className={activeLink === "product"? "active navbar-link": "navbar-link"}onClick={()=>{onUpdateActiveLink("product")}}>Product</Nav.Link> 
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src={} alt="" /></a>
                    <a href='#'><img src={} alt="" /></a>
                    <a href='#'><img src={} alt="" /></a>
                </div>
                <button className='vvd' onClick={()=>console.log("conect")}>Let's Connect</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;