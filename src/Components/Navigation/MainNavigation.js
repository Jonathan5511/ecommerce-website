import { Fragment } from "react";
import { Nav, Col, Row,Navbar,Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'

const MainNavigation=(props)=>{
    return (
        <Fragment>
            <h5>
                <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto" >
                            <Row >
                                <Col>
                                    <NavLink to="/home" style={{color:'white', textDecoration: 'none'}} >HOME</NavLink>
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
            <div className={classes.header}>
                <header >
                    <h1>The Generics</h1>
                </header>
            </div>
            <br/>
            </Fragment> 
    )
}

export default MainNavigation;