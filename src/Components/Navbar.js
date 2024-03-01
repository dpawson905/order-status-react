import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export default function MainNav() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-white' sticky='top'>
        <Container>
          <Navbar.Brand
            href='https://www.casualfurnitureworld.com'
            target='_blank'
          >
            <Image
              src='logo-dark-min.webp'
              alt='Casual Furniture World Logo'
              width='170'
              height='70'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto my-2 my-lg-0 text-uppercase lead'>
              <Nav.Link href='https://www.casualfurnitureworld.com'>
                Home
              </Nav.Link>
              <Nav.Link href='https://www.casualfurnitureworld.com/pages/about-us'>
                About Us
              </Nav.Link>
              <Nav.Link href='https://www.casualfurnitureworld.com/pages/store-locator'>
                Visit
              </Nav.Link>
              <Nav.Link href='https://www.casualfurnitureworld.com/collections/patio-and-outdoor-furniture'>
                Shop Online
              </Nav.Link>
              <Nav.Link href='https://www.casualfurnitureworld.com/pages/contact'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
