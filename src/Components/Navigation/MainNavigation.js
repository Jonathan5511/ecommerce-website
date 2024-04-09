import { Nav, Col, Row,Navbar,Container  } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MainNavigation=(props)=>{
    return (
            <h5>
                <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto" >
                            <Row >
                                <Col>
                                    <NavLink style={{color:'white', textDecoration: 'none'}} >HOME</NavLink>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <NavLink  to="/" style={{color:'white', textDecoration: 'none'}} >STORE</NavLink>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <NavLink  to="/about" style={{color:'white', textDecoration: 'none'}} >ABOUT</NavLink>
                                </Col>  
                            </Row>
                    </Nav>
                    </Container>
                </Navbar>
            </h5>  
    )
}

export default MainNavigation;