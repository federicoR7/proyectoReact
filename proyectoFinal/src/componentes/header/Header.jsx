import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import Logo from '../../assets/img/logoVN.jpg'
import LogoHome from '../../App'
import { Link } from 'react-router-dom';





function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand ><Link to="/"><img src={Logo} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
                
            <NavDropdown title="Servicios" id="navbarScrollingDropdown">
              <div className='cajaSubMenu'>
                <NavDropdown.Item href="#action1">Peluquería</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action2">Manicuría</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Esculpidas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Pies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Tratamientos Faciales</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">Depilación</NavDropdown.Item>
              </div>
            </NavDropdown>
            

            <Nav.Link href="#action1" ><Link to="/Nosotros" className='nosotros'> Nosotros</Link></Nav.Link>

            <Nav.Link href="#" ><Link to="/Contacto" className='nosotros'> Contacto</Link> </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              size="lg"
              placeholder="Servicios"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;