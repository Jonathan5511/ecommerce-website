import { Card, Image,Container, CardTitle, CardFooter, Button,Col,Row} from "react-bootstrap"

const productsArr = [
    { 
    title: 'Colors',  
    price: 100,  
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',   
    },   
    {   
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const AvailableProducts=props=>{
    return(
        <Container className="mt-3 "> 
            <ul>
            <Row lg={3} className="mx-0">
         {productsArr.map(item=>(
                
                        <li style={{listStyle:"none"}}>
                            <Col className="d-flex">
                                <Card style={{ width: '18rem' }}>
                                    <CardTitle style={{textAlign:"center"}}>{item.title}</CardTitle>
                                    <Image src={item.imageUrl}></Image>
                                    <CardFooter>${item.price}
                                        <Button style={{float: 'right'}} variant="primary">
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