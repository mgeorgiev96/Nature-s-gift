import React,{useContext, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cart from './Cart'
import {ShopContext} from './Context'
import axios from 'axios'

function NavBar() {


  const showCart = ()=>{
    let cart = document.querySelector('.cart_container')
    cart.style.display="block"
  }
  const displayPurchaseH = ()=>{
    let container = document.querySelector('.purchase_container')
    if(container.style.display==="none"){
      container.style.display= 'block'
    }else{
      container.style.display= 'none'
    }
}


  const [total,setTotal,index,handleIndex,user,setUser] = useContext(ShopContext)

  useEffect(()=>{
    axios.get('/api/info').then(user=>{
      setUser(user.data)
      let saved = document.querySelectorAll('.fav-icon')
      for(let i=0;i<saved.length;i++){
        if(user.data.favourite.includes(saved[i].classList[3])){
          saved[i].classList.add('fav-saved')
        }
      }

    })
  },[])

    return (
<Navbar collapseOnSelect expand="lg">
  <Navbar.Brand><img className="profile_logo" src={"./images/logo.jpg"}></img></Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
      <NavDropdown title="" id="collasible-nav-dropdown">
        <NavDropdown.Item onClick={showCart} className="cart_button">View Cart</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleIndex(0)}>Aloe Vera Products</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleIndex(1)}>Natural Products</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleIndex(2)}>Detox Prodcuts</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleIndex(3)}>Skincare Products</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleIndex(4)}>Supplementation</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleIndex(5)}>Nutrition Plan</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/api/logout">Logout</NavDropdown.Item>
      </NavDropdown>
      <img onClick={displayPurchaseH} className="pay-history" src="https://img.icons8.com/color/48/000000/payment-history.png"/>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar;
