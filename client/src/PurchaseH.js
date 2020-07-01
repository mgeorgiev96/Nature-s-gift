import React,{useContext, useEffect} from 'react'
import {ShopContext} from './Context'

function PurchaseH() {
    const [total,setTotal,index,handleIndex,user,setUser] = useContext(ShopContext)

    const closeHistory = (e)=>{
        let target = e.target.parentElement.parentElement
        target.style.display = 'none'
    }

    useEffect(()=>{
        let purchase_list = document.querySelector('.purchase_list')
        if(user.purchase){
            purchase_list.innerHTML = ''
            let history = user.purchase
            for(let i =0;i<history.length;i++){
                let li = document.createElement('li')
                li.innerHTML = `${history[i].date} - ${history[i].amount}$`
                purchase_list.appendChild(li)
            }
        } 
    })
    return (

            <div className="purchase_container">
                <h2>Purchase History<i className="fa fa-close" onClick={closeHistory}></i></h2>
                <ul className={'purchase_list'}>

                </ul>
            </div>
    )
}

export default PurchaseH;
