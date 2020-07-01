import React,{useState, useEffect,useContext} from 'react'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ShopContext} from './Context'
import axios from 'axios'

function Pop(props) {
    const [showA, setShowA] = useState(false);
    const [total,setTotal,index,handleIndex,user,setUser] = useContext(ShopContext)
    const saveFav =  (e)=>{
      let target = e.target
      if(target.classList.contains('fav-saved')){
        target.classList.remove('fav-saved')
         axios.post('/api/favourite/remove',{
          name: target.classList[3],
          user: user.username
        })
      }else{
        
        target.classList.add('fav-saved')
         axios.post('/api/favourite',{
          name: target.classList[3],
          user: user.username
        })
      }
    }

    const toggleShowA = (e) => {
      let img = e.target.parentElement.parentElement.children[0]
      if(showA===false){
        img.classList.add('active_img')
      }else{
        img.classList.remove('active_img')
      }
      setShowA(!showA);
    }

    const buyItem = (e)=>{
      let cartBody = document.querySelector('.modal-body')
      if(e.target.className === 'fa fa-cart-plus'){
        let cart = document.querySelector('.cart_items')
        let name = e.target.parentElement.parentElement.children[0]
        let qty = e.target.parentElement.children[1].children[1]
        let itemImg = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src
        let img = document.createElement('img')
        let li = document.createElement('li')
        if(qty.value!=='' && qty.value!=='0' ){
          let price  = parseInt(qty.value) *  parseInt(e.target.parentElement.children[0].className)
          let item = document.querySelector('.add_item')
          setTotal(total + price)
          img.src = itemImg
          li.appendChild(img)
          li.innerHTML += `${name.innerHTML} - x${qty.value} - ${price}$ <i class="fa fa-close"></i>`
          li.className = price
          cart.appendChild(li)
          qty.value=''
        }
      }
    }


    return (
      <Row xs={12}>
            <i className={`fav-icon fa fa-heart ${props.name.replace(/[" "]/g, '-')}`} onClick={saveFav}></i>
        <Col className="info_item">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
            <strong className="mr-auto">{props.name}</strong>
            </Toast.Header>
            <Toast.Body>
                <p className={props.price}>{props.info}</p>
                <div>
                <label>QTY - </label>
                <input type="number" min="1"></input>
                </div>
                <h6>Price Per Unit - {props.price}</h6>
                <i onClick={buyItem} className="fa fa-cart-plus"></i>
            </Toast.Body>
          </Toast>
        </Col>
          <i className="fa fa-info-circle" onClick={toggleShowA}>
            
          </i>
      </Row>
    );
  }

  export default Pop;