import Button from 'react-bootstrap/Button';
import Usermodal from '../UI/Usermodal';
import Modal from 'react-bootstrap/Modal';
import { Row,Col, Table, Image } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart=props=>{
    const cartCtx=useContext(CartContext);
    
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`

    const onRemoveHandler=(id)=>{
        cartCtx.removeItem(id)
    }

    return(
    <Usermodal onClose={props.onClose}>
        <Modal.Dialog>
          <Modal.Header >
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
            <hr/>
          <Modal.Body style={{
            maxHeight: 'calc(100vh - 210px)',
            overflowY: 'auto'
            }}>
            <Row>
                <Col>
                    <Table className='align-middle ' size="sm-10" responsive>
                        <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartCtx.items.map(item=>{
                                return(
                                    <tr key={item.id}>
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
                                                ${item.price}
                                            </h6>
                                        </td>
                                        <td >
                                            <h6>
                                                {item.quantity }&nbsp;&nbsp;&nbsp;
                                                <Button type='button' onClick={()=>onRemoveHandler(item.id)}>Remove</Button>
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
            <div class="modal-footer justify-content-between">                  
                <h6 >
                    TOTAL AMOUNT: {totalAmount}
                </h6>  
            </div>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={props.onClose}>Close</Button>&nbsp;
            <Button variant="primary">Purchase</Button>
          </Modal.Footer>
        </Modal.Dialog>
    </Usermodal>
)}

export default Cart;