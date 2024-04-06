import { Button, Container, Navbar,Nav, NavbarCollapse  } from "react-bootstrap";
import { Fragment } from "react";

const Header=()=>{
    return(
        <Fragment>
            <Navbar bg="primary" data-bs-theme="light">
            <Container >
                <h5>
                    <Nav className="me-auto">
                        <Nav.Link >HOME</Nav.Link>
                        <Nav.Link >STORE</Nav.Link>
                        <Nav.Link >ABOUT</Nav.Link>
                    </Nav>
                </h5>
                <NavbarCollapse className="justify-content-end">
                    <Button variant="dark">Cart</Button>
                </NavbarCollapse>
            </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header;