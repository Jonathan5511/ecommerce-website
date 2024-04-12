import { Fragment } from "react";
import classes from './Contact.module.css'

const Contact=()=>{

    const fetchContactHandler=event=>{
        event.preventDefault();
        const contact={
            name:event.target.name.value,
            email:event.target.email.value,
            phone:event.target.phone.value
        }
        if(event.target.name.value.trim().length ===0 && event.target.email.value.trim().length===0 && event.target.phone.value.trim().length===0){
            return;
        }
        fetch('https://contact-ecommerce-5c643-default-rtdb.firebaseio.com/contact.json',{
            method:'POST',
            body:JSON.stringify(contact),
            headers:{
                'Content-Type':'application/json'
              }
        })
        event.target.name.value=''
        event.target.email.value=''
        event.target.phone.value=''
    }

    return(
        <Fragment>
            <form onSubmit={fetchContactHandler} className={classes.control}>
                <label htmlFor='name'>Name:</label>
                <input id="name" type="text" name="name"/>
                <label htmlFor='email'>EmailID:</label>
                <input id="email" type="email" name="email"/>
                <label htmlFor='phone'>Phone Number:</label>
                <input id="phone" type="number" name="phone"/>
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    ) 
   
}

export default Contact;