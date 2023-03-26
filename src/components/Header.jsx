import React from 'react'
import { Container, Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/' className='link'>
          <Navbar.Brand>Shop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/' className='link' >
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer className='link' to='/'>
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Category One</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Category Two
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Deals
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login" >
              <i className=' fas fa-shopping-cart'></i>
              Cart
            </Nav.Link>
            <LinkContainer className='link' to='/login'>

              <Nav.Link >
                <i className='fas fa-user'></i>
                Login
              </Nav.Link>
            </LinkContainer>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header