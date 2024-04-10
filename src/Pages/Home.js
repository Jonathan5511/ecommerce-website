import { Fragment } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";

const Home=()=>{
    return (
        <Fragment>
            <h1 class="text-center" style={{fontStyle:"oblique"}}>TOURS</h1>
            <br/>
            <Container>
                <Table size="sm-10">
                    <tbody>
                        <tr>
                            <td >JUL 16</td>
                            <td>DETROIT,MI</td>
                            <td>DTE ENERGY MUSIC THEATRE</td>
                            <td><Button variant="primary">BUY TICKETS</Button></td>
                        </tr>
                        <tr>
                            <td>JUL 19</td>
                            <td>TORONTO,ON</td>
                            <td>BUDWEISER STAGE</td>
                            <td><Button variant="primary">BUY TICKETS</Button></td>
                        </tr>
                        <tr>
                            <td>JUL 22</td>
                            <td>BRISTOW, VA</td>
                            <td>JIGGY LUBE LIVE</td>
                            <td><Button variant="primary">BUY TICKETS</Button></td>
                        </tr>
                        <tr>
                            <td>JUL 29</td>
                            <td>PHOENIX, AZ</td>
                            <td>AK-CHIN PAVILION</td>
                            <td><Button variant="primary">BUY TICKETS</Button></td>
                        </tr>
                        <tr>
                            <td>AUG 2</td>
                            <td>LAS VEGAS, NV</td>
                            <td>T-MOBILE ARENA</td>
                            <td><Button variant="primary">BUY TICKETS</Button></td>
                        </tr>
                        <tr>
                            <td>AUG 7</td>
                            <td>CONCORD, CA</td>
                            <td>CONCORD PAVILION</td>
                            <td><Button variant="primary">BUY TICKETS</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    )
}

export default Home;