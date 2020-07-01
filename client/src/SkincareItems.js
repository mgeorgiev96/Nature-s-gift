import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Card"
import Pop from './Toast'

function SkincareItems() {
    return (
        <div className="shop_aloe">
      <Card>
        <Card.Img variant="top" src={"./images/skin1.jpg"} />
        <Pop name={'Charcoal Salt Scrub'} info={'Homemade charcoal scrub with sea salt - 300g.'} price={'10$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin2.jpg"} />
        <Pop name={'Grapefruit Face Scrub for Acne'} info={'Organic face scrub from grapefruit - 300g..'} price={'11$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin3.jpg"} />
        <Pop name={'Shea butter Lotion'} info={'Organic lotion for body - 200ml.'} price={'8$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin4.jpg"} />
        <Pop name={'Exfoliating Pumpkin Face Mask'} info={'Homemade Face Mask from punkin seeds - 150ml.'} price={'12$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin5.jpg"} />
        <Pop name={'Pumpkin Spice Face Mask'} info={'Pumpkin spice face mask - 150ml.'} price={'13$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin6.jpg"} />
        <Pop name={'Rose Clay Mask'} info={'Homemade mask from roses - 100g.'} price={'6$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin7.jpg"} />
        <Pop name={'Cinnamon Clay Mask'} info={'Cinnamon based clay mask - 100g.'} price={'5$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin8.jpg"} />
        <Pop name={'Pomegranate Face Serum'} info={'Natural pomegranate face serum - 50ml.'} price={'20$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin9.jpg"} />
        <Pop name={'Rose Gold Face Serum'} info={'High quality face serum - 50ml.'} price={'25$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin10.jpg"} />
        <Pop name={'Vanilla Lavender Balm'} info={'Homemade lavender balm - 100ml.'} price={'20$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/skin11.jpg"} />
        <Pop name={'Rose Water'} info={'Homemade rose water for face - 90ml.'} price={'15$'}/>
      </Card>
    
      </div>
    )
}

export default SkincareItems;