import { Fragment } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

const productsArr = [
    { 
    id:'m1',
    title: 'Colors',  
    price: 100,  
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    reviews: "The sprawling and spectacular Colors album is an essential trove of music Each song is like a foggy transmission from a rock'n'roll netherworld with its own ghostly canon of beloved hits."
    },   
    {  
    id:'m2' ,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    reviews:"The singer-songwriter's third album is strongest yet, the sound of a wise, clear-eyed, melodious prodigy coming into their own voice."
    },
    {
    id:'m3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    reviews:"Channeling new age and spiritual jazz, the multidisciplinary artist's debut solo album creates its own thoughtful and potent world with the help of many guests and many flutes."
    },
    {
    id:'m4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    reviews:"Ill-starred and long overlooked, the Detroit shoegaze band finally gets its due with a new Numero Group compilation."
    }
]

const ProductDetails=()=>{
    const params=useParams();

    const products=productsArr.find(product=>product.id === params.productID)

    return (
    <Fragment>
        <Container>
            <h1 style={{marginTop:-20}}>Product Reviews</h1>
            <hr></hr>
            <div style={{marginTop:-10}} class="text-center">
                <h2>{products.title}</h2>
                <Image height='200' src={products.imageUrl}></Image>
            </div>
            <br/>
            <div class="text-center"> 
                <p style={{fontWeight:"bold",fontSize:25,marginTop:-20}}>Reviews</p>
                <p style={{fontStyle:"italic",fontWeight:"bold"}}>{products.reviews}</p>
            </div>
            <br/>
            <div style={{marginTop:-20}} class="text-center">
            <NavLink to='/'>
                    <Button size='md' variant="dark">Back</Button>
            </NavLink>
            </div>
        </Container>
    </Fragment>)
    }

export default ProductDetails;