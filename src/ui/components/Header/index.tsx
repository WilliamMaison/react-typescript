import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" className="sticky-top w-100">
      <Container>
        <Navbar.Brand>React typescript</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/another-page">
            Another page
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
