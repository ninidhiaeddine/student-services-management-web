import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar className="color-nav" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Student Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#setting">Setting</Nav.Link>
            <Nav.Link href="#acount">Acount</Nav.Link>
            <Nav.Link href="#reservation">Reservation</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#acount">Logout</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;