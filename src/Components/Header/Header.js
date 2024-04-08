import { Button, Container, Navbar,Nav, NavbarCollapse, Col, Row  } from "react-bootstrap";
import { Fragment } from "react";


const Header=(props)=>{
    return(
        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark">
            <Container style={{display:'flex'}}>
                <h5>
                    <Nav className="me-auto">
                        <Row>
                            <Col>
                                <Nav.Link style={{color:'white'}} >HOME</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link  style={{color:'white'}} >STORE</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link  style={{color:'white'}} >ABOUT</Nav.Link>
                            </Col>
                        </Row>
                    </Nav>
                </h5>
                <NavbarCollapse className="justify-content-end">
                    <Button variant="light" onClick={props.onShow}>Cart</Button>
                </NavbarCollapse>
            </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header;