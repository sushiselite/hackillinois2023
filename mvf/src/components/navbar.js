import {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import dynamic from 'next/dynamic';
import Link from "next/link";
const DarkReader = dynamic(() => import('react-darkreader'), {ssr: false});

function NavBar({darkmode, setDarkmode}) {
    return (
    <Navbar expand="lg">
      {/* <Container className="w-100 float-left"> */}
        <Navbar.Brand href="/">Multi-Vendor Framework</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/post" className="nav-link">Post</Link>

          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
	    <DarkReader isDark={darkmode} onChange={(enabled) => {setDarkmode(enabled)}}/>
    </Navbar>
    )
}

export default NavBar;
