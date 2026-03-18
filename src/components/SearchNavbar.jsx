import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

// import crest from '../../assets/uw-crest.svg'

export default function SearchNavbar(props) {
  return (
    <Navbar bg="light" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">
                <img
                    alt="Badger Research Logo"
                    src={""}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Badger ReSearch!
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}