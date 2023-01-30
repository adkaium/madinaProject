import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

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

        return () =>window.removeEventListener('scroll', onScroll);
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z" fill="white"/>
<path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z" fill="white"/>
<path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z" fill="white"/>
</svg>
                    {/* <a href='#'><img src={} alt="" /></a>
                    <a href='#'><img src={} alt="" /></a>
                    <a href='#'><img src={} alt="" /></a> */}
                </div>
                <button className='vvd' onClick={()=>console.log("conect")}>Let's Connect</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;