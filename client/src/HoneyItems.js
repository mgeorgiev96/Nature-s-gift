import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Card"
import Pop from './Toast'

function HoneyItems() {
    return (
        <div className="shop_aloe">
      <Card>
        <Card.Img variant="top" src={"./images/honey1.jpg"} />
        <Pop name={'Organic Honey'} info={'High quality organic honey - 750g.'} price={'10$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey2.jpg"} />
        <Pop name={'Organic Lavender Honey'} info={'High quality organic lavender honey - 750g.'} price={'12$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey3.jpg"} />
        <Pop name={'Natural Peanut Butter'} info={'Homemade peanut butter - 500g.'} price={'8$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey4.jpg"} />
        <Pop name={"Granola Bars"} info={'Granola bars with almonds - 6 x 40g.'} price={'6$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey5.webp"} />
        <Pop name={'Homemade Oatmeal Cookies'} info={'Soft and healthy oatmeal cookies - 6 x 35g.'} price={'6$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey6.jpg"} />
        <Pop name={"Homemade Soy Milk"} info={'A healthy and delicious drink - 1L.'} price={'6$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey7.jpg"} />
        <Pop name={'Walnut Shortbreads'} info={'Homemade walnut short breads - 6 x 35g.'} price={'4$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey8.webp"} />
        <Pop name={"Italian Pear Almond Cake"} info={'Delicious homemade pear and almond cake - 250g.'} price={'5$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey9.jpg"} />
        <Pop name={"Homemade Rice Milk"} info={'A healthy and delicious drink - 1L.'} price={'10$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey10.jpg"} />
        <Pop name={'Dried Fruits'} info={'Variation of dried fruits(can be mixed) - 1kg.'} price={'22$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/honey11.webp"} />
        <Pop name={"Pecan Energy Bites"} info={'Start your day with one of these amazing pecan bites - 6 x 30g.'} price={'9$'}/>
      </Card>
    
      </div>
    )
}

export default HoneyItems;
