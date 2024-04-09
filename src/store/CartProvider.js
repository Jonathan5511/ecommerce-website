import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState={
    items:[],
    totalAmount:0,
}

const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.quantity
        const existingCartIndex=state.items.findIndex((item)=>item.id===action.item.id)
        const existingCartItem=state.items[existingCartIndex];
        let updatedItems
        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                quantity:existingCartItem.quantity+1,
                price:existingCartItem.price+action.item.price
            };
            updatedItems=[...state.items]
            updatedItems[existingCartIndex]=updatedItem
        }
        else{
            updatedItems=[...state.items,action.item]
        }
        return {items:updatedItems,
        totalAmount:updatedTotalAmount}
    }
    if(action.type==='REMOVE'){
        const existingCartIndex=state.items.findIndex((item)=>item.id===action.id)
        const existingCartItem=state.items[existingCartIndex];
        const updatedTotalAmount=state.totalAmount-(existingCartItem.price/(existingCartItem.quantity))
        let updatedItems;
        if(existingCartItem.quantity===1){
            updatedItems=state.items.filter(item=>item.id!==action.id)
        }
        else{
            const updatedItem={
                ...existingCartItem,
                quantity:existingCartItem.quantity-1,
                price:existingCartItem.price-(existingCartItem.price/(existingCartItem.quantity))
                
            }
            updatedItems=[...state.items]
            updatedItems[existingCartIndex]=updatedItem
        }
        return {items:updatedItems,
            totalAmount:updatedTotalAmount}
    }
    return defaultCartState;
}

const CartProvider =props=>{

    const [cartState,dispatchCartAction] =useReducer(cartReducer,defaultCartState)

    const addToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    }

    const removeCartHandler=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }

    const cartContent={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addToCartHandler,
        removeItem:removeCartHandler
    }

    return(<CartContext.Provider value={cartContent}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider;