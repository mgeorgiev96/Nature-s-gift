import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Card"
import Pop from './Toast'

function DetoxItems() {
    return (
        <div className="shop_aloe">
      <Card>
        <Card.Img variant="top" src={"./images/detox1.jpg"} />
        <Pop name={'Green Apple and Cucumber Juice'} info={'Refreshing detox drink - 500ml.'} price={'4$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox2.JPG"} />
        <Pop name={'Orange-Carrot Ginger Detox '} info={'Homemade detox drink - 500ml.'} price={'3$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox3.jpg"} />
        <Pop name={'Lemon and Cucumber'} info={'Homemade detox drink - 500ml.'} price={'5$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox4.webp"} />
        <Pop name={'Pomegranate Juice'} info={'Healthy drink - 500ml.'} price={'7$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox5.webp"} />
        <Pop name={'Honey Lemon Ginger Tea(sachets)'} info={'Refreshing detox drink - 20 sachets.'} price={'5$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox6.webp"} />
        <Pop name={'Coconut Water With Lemon and Mint'} info={'Refreshing detox drink - 500ml.'} price={'12$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox7.jpg"} />
        <Pop name={'Ginger Litchi Lemonade'} info={'Homemade lemonade with ginger.'} price={'4$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox8.jpg"} />
        <Pop name={'Fruit Infused Tea(sachets)'} info={'A classic fruit infused tea - 20 sachets.'} price={'4$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox9.jpg"} />
        <Pop name={'Aam Panna'} info={'Aam panna is made of mango pulp and blended with cumin. - 500ml.'} price={'12$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox10.webp"} />
        <Pop name={'Pineapple Lemonade'} info={'Refreshing detox drink - 500ml.'} price={'12$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox11.webp"} />
        <Pop name={'Beetroot And Mint Juice'} info={'refreshing and full of vitamins drink - 500ml.'} price={'8$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox12.webp"} />
        <Pop name={'Strawberry And Cinnamon Water'} info={'Detox drink with strawberries and cinnamon - 500ml.'} price={'6$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/detox13.webp"} />
        <Pop name={'Buttermilk Detox Drink'} info={'Curd is a natural source of probiotics.- 350ml.'} price={'15$'}/>
      </Card>
    
      </div>
    )
}

export default DetoxItems;