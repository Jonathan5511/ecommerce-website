import { Fragment } from "react";
import { Nav, Col, Row,Navbar,Container, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const MainNavigation=(props)=>{
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    const LogoutHandler=()=>{
        authCtx.logout();
    }

    return (
        <Fragment>
            <h5>
                <Navbar bg="dark" data-bs-theme="dark">
                <Container className="justify-content-center">
                    <Nav >
                            <Row >
                                {isLoggedIn &&
                                <Col>
                                    <NavLink to="/home" style={{color:'white', textDecoration: 'none'}} >HOME</NavLink>
                                </Col>}
                                &nbsp;&nbsp;&nbsp;
                                {isLoggedIn && 
                                <Col>
                                    <NavLink  to="/" style={{color:'white', textDecoration: 'none'}} >STORE</NavLink>
                                </Col>}
                                &nbsp;&nbsp;&nbsp;
                                {isLoggedIn && <Col>
                                    <NavLink  to="/about" style={{color:'white', textDecoration: 'none'}} >ABOUT</NavLink>
                                </Col>}
                                &nbsp;&nbsp;&nbsp;
                                {!isLoggedIn &&  <Col>
                                    <NavLink  to="/login" style={{color:'white', textDecoration: 'none'}} >LOGIN</NavLink>
                                </Col>}
                                {isLoggedIn && <Col className="justify-content-md-center">
                                    <Button onClick={LogoutHandler} variant="light">Logout</Button>
                                </Col>}
                            </Row>
                    </Nav>
                    </Container>
                </Navbar>
            </h5>
            <div class="text-center" className={classes.header}>
                <header >
                    <h1>The Generics</h1>
                </header>
            </div>
            <br/>
            </Fragment> 
    )
}

export default MainNavigation;