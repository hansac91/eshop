import React from "react";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal.js"; 
import { useStateValue } from './StateProvider';
import { ListItemAvatar } from '@mui/material';



function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout_left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ4NFYiy3gLrCkSCURxm7w8u7ZDMr3kSA7g&usqp=CAU" 
            alt="" className="checkout_ad" />
            <h2 className="checkout_title">
                    Your shopping basket</h2>
        {basket.map ( item => (
            <CheckoutProduct 
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                /> 
        ))}
            </div>


            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout