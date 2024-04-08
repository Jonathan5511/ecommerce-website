import Button from 'react-bootstrap/Button';
import Usermodal from '../UI/Usermodal';
import Modal from 'react-bootstrap/Modal';
import { Row,Col, Table, Image } from 'react-bootstrap';

const cartElements = [
    { 
    title: 'Colors',
    price: 100, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',  
    quantity: 2,   
    }, 
    {  
    title: 'Black and white Colors', 
    price: 50,  
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 
    quantity: 3, 
    }, 
    { 
    title: 'Yellow and Black Colors', 
    price: 70, 
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1, 
    }
]

const Cart=props=>{
    return(
    <Usermodal onClose={props.onClose}>
        <Modal.Dialog>
          <Modal.Header >
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
            <hr/>
          <Modal.Body>
            <Row>
                <Col>
                    <Table className='align-middle ' size="sm" responsive>
                        <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartElements.map(item=>{
                                return(
                                    <tr key={Math.random().toString()}>
                                        <td >
                                            <h6>                                           
                                                {item.title}
                                            <br/>
                                            </h6>
                                            <Col>
                                                <Image src={item.imageUrl} height={100} rounded/>
                                            </Col>
                                            
                                        </td >
                                        <td  >
                                            <h6>
                                                {item.price}
                                            </h6>
                                        </td>
                                        <td >
                                            <h6>
                                                {item.quantity }&nbsp;&nbsp;&nbsp;
                                                <Button type='button'>Remove</Button>
                                            </h6>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>Close</Button>&nbsp;
            <Button variant="primary">Purchase</Button>
          </Modal.Footer>
        </Modal.Dialog>
    </Usermodal>
)}

export default Cart;