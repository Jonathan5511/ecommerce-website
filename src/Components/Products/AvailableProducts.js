import { Card, Image,Container, CardTitle, CardFooter, Button,Col,Row} from "react-bootstrap"
import CartContext from "../../store/cart-context"
import { useContext } from "react"

const productsArr = [
    { 
    id:'m1',
    title: 'Colors',  
    price: 100,  
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',   
    },   
    {  
    id:'m2' ,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id:'m3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id:'m4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const AvailableProducts=props=>{
    const cartCtx=useContext(CartContext);

    const onAddItemHandler=(id,title,imageUrl,price)=>{
        cartCtx.addItem({
            id:id,
            title:title,
            imageUrl:imageUrl,
            price:price,
            quantity:1
        })
    }

    return(
        <Container className="mt-3 "> 
            <ul>
            <Row lg={3} className="mx-0">
         {productsArr.map(item=>(
                
                        <li style={{listStyle:"none"}} key={item.id}>
                            <Col className="d-flex">
                                <Card style={{ width: '18rem' }}>
                                    <CardTitle style={{textAlign:"center"}}>{item.title}</CardTitle>
                                    <Image src={item.imageUrl}></Image>
                                    <CardFooter>${item.price}
                                        <Button style={{float: 'right'}} variant="primary" onClick={()=>onAddItemHandler(item.id,item.title,item.imageUrl,item.price)}>
                                            Add To Cart
                                        </Button>
                                    </CardFooter>
                                </Card>
                                </Col>
                        </li>
         ))}
         </Row>
         </ul>
        </Container>
    )
    
    

}

export default AvailableProducts;