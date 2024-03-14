import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      <Navbar
        key={"lg"}
        expand={"lg"}
        className="mb-3"
        style={{ backgroundColor: "#3b99f7" }}
        // bg="dark"
        // data-bs-theme="dark"
      >
        <Container fluid>
          <Link to="/">
            <Navbar.Brand
              // href="#"
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            >
              TO JOIN
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                TO JOIN
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginLeft: 15,
                    fontSize: 20,
                  }}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginLeft: 15,
                    fontSize: 20,
                  }}
                  to="/Guide"
                >
                  Guide section
                </Link>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginLeft: 15,
                    fontSize: 20,
                  }}
                  to="/CarRent"
                >
                  Car Rentel
                </Link>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginLeft: 15,
                    fontSize: 20,
                  }}
                  to="/PersonalDriver"
                >
                  Personal driver
                </Link>

                {/* DropDown menu () */}
                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              {/* search */}
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
