import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBar from './NavBar'
import Shop from './Shop'
import Cart from './Cart'
import PurchaseH from './PurchaseH'
import Footer from './Footer'

function Profile() {
    return (
            <Container fluid>
                <NavBar/>
                <Cart/>
                <PurchaseH/>
                <Shop/>
                <Footer/>
            </Container>
    )
}

export default Profile;
