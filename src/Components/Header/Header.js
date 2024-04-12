import { Button, Container} from "react-bootstrap";
import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header=(props)=>{
    const cartCtx=useContext(CartContext);
    const {items}=cartCtx
    const numberOfCartItems = items.reduce((curNumber,item) => {
        return curNumber + item.quantity;
      }, 0);
      

    return(
        <Fragment>
            
            <Container style={{marginTop:-25}}>
                <div class="text-center">
                    <Button variant="success" onClick={props.onShow}>Cart &nbsp;{numberOfCartItems}</Button>
                </div>
            </Container>
        
        </Fragment>
    )
}

export default Header;