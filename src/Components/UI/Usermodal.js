import { Fragment } from "react"
import classes from './Usermodal.module.css'
import ReactDOM  from "react-dom"

const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClose}/>  
}

const Overlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const protalElement=document.getElementById('overlay')

const Usermodal = props=>{
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,protalElement)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,protalElement)}
    </Fragment>
}

export default Usermodal;