import React,{useContext, useEffect} from 'react'
import {ShopContext} from './Context'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import moment from 'moment'

function Cart() {
    const [total,setTotal,index,handleIndex,user,setUser] = useContext(ShopContext)

    useEffect(()=>{
        let stripeBtn = document.querySelector('.stripe_button')
        let btn = document.createElement('p')
        btn.style.backgroundImage = 'url("./images/moneyo.png")'
        stripeBtn.appendChild(btn)
        stripeBtn.children[0].style.display='none'
    },[])

    const hideCart = ()=>{
        let cart = document.querySelector('.cart_container')
        cart.style.display='none'
    }

    const removeItem = (e)=>{
        let target = e.target
        if(target.className === 'fa fa-close'){
            let price = parseInt(target.parentElement.className)
            target.parentElement.parentElement.removeChild(target.parentElement)

            setTotal(total - price)
            
        }
    }

    const handleToken = (token)=>{
        let cart = document.querySelector('.cart_items')
        let date = new Date()
        axios.post('/api/purchase',{
            username: user.username,
            value: total,
            date: moment(date).format("LLLL")
        })
        cart.innerHTML = ''
        setTotal(0)
    }
    return (
        <div className="cart_container">
            <div>
                
            <StripeCheckout className="stripe_button"
            token={handleToken}
            stripeKey="pk_test_51GxXTwJWnlXzpGEmHhKz3nGdCrzRjY8QE4fuYMo6CNYAuJXIQCDMy2LXCAVyTbME9zrYK60HxAjBEaE9ulvYSRJ700jdk4z5x2"
            billingAddress
            shippingAddress
            description="Nature's Gift"
            />
            <h5>Cart Total - {total}$ </h5>
            <i className="fa fa-close" onClick={hideCart}></i>
            </div>
            <ul className="cart_items" onClick={removeItem}>
            </ul>

        </div>
    )
}

export default Cart;

