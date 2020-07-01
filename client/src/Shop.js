import React, { useState,useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {ShopContext} from './Context'
import ShopItems from './ShopItems'
import HoneyItems from './HoneyItems'
import DetoxItems from './DetoxItems'
import SkincareItems from './SkincareItems'
import SuppItems from './SuppItems'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Email from './Email'
import Popover from './Popover'

function Shop() {

  const [total,setTotal,index,handleIndex,user,setUser] = useContext(ShopContext)

  const handleNextPrev = (e)=>{
    if(e.target.className==="carousel-control-next-icon"){
      if(index===5){
        handleIndex(0)
      }else{
        handleIndex(index + 1)
      }
    }
  
    if(e.target.className==="carousel-control-prev-icon"){
      if(index===0){
        handleIndex(5)
      }else{
        handleIndex(index - 1)
      }
    }

  }

    return (
<Carousel activeIndex={index} onClick={handleNextPrev}>
  <Carousel.Item className="shop_window_container">
    <div className="title_text"><span>Aloe Vera Products</span></div>
    <div className="background_image background_aloe"><ShopItems/></div>

  </Carousel.Item>
  <Carousel.Item className="shop_window_container">
  <div className="title_text"><span>Natural Products</span></div>
  <div className="background_image background_honey"><HoneyItems/></div>

  </Carousel.Item>
  <Carousel.Item className="shop_window_container">
  <div className="title_text"><span>Detox Products</span></div>
  <div className="background_image background_detox"><DetoxItems/></div>
  </Carousel.Item>
  <Carousel.Item className="shop_window_container">
  <div className="title_text"><span>Skincare Products</span></div>
  <div className="background_image background_skincare"><SkincareItems/></div>

  </Carousel.Item>
  <Carousel.Item className="shop_window_container">
  <div className="title_text"><span>Supplementation</span></div>
  <div className="background_image background_supplement"><SuppItems/></div>
  
  </Carousel.Item>
  <Carousel.Item className="shop_window_container">
  <div className="title_text"><span>Nutrition Plan</span></div>
  <div className="background_image background_nutrition">
  <Jumbotron>
    <Popover/>
    <h1>Hello, {user.name}!</h1>
  <h4>Are you in need of some help organizing your training routines and diet?</h4>
  <p>Email us below with your personal details and we will get back to you, as soon as possible!</p>
  <p>
    <Email/>
  </p>
</Jumbotron>
  </div>

  </Carousel.Item>
</Carousel>
    )
}

export default Shop;
