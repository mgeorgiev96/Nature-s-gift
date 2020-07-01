import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Card"
import Pop from './Toast'

function ShopItems() {
    return (
        <div className="shop_aloe">
        <Card>
        <Card.Img variant="top" src={"./images/aloe1.jpg"} />
        <Pop name={'Aloe Vera Soap'} info={'High quality aloe vera soap.'} price={'3$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe2.jpg"} />
        <Pop name={'Aloe Gel'} info={'Natural aloe vera gel for skin and hair.'} price={'5$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe3.jpg"} />
        <Pop name={'Body Scrub'} info={'Natural aloe vera body scrub  - 250g.'} price={'25$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe4.jpg"} />
        <Pop name={'Drinking Gel'} info={'Aloe Vera based drink - 500ml.'} price={'10$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe5.jpg"} />
        <Pop name={'Aloe Vera Toothpaste'} info={'Natural aloe vera toothpaste - 75g'} price={'7$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe6.jpg"} />
        <Pop name={'Hand Cream'} info={'Aloe Vera hand cream - 100ml.'} price={'5$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe7.jpg"} />
        <Pop name={'Aloe Vera Jelly Bites'} info={'Oranic aloe vera jelly bites(20x35g).'} price={'13$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe8.jpg"} />
        <Pop name={'Dried Aloe Vera'} info={'Oranic dried aloe vera pieces(20x35g).'} price={'10$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe9.jpg"} />
        <Pop name={'Aloe Vera Detox Drink'} info={'Aloe Vera and lemon detox drink - 500ml.'} price={'10$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/aloe10.jpg"} />
        <Pop name={'Aloe Vera Jasmine Soap'} info={'Aloe Vera and jasmine soap.'} price={'5$'}/>
      </Card>
    
      </div>
    )
}

export default ShopItems;
