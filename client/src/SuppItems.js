import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Card"
import Pop from './Toast'

function SuppItems() {
    return (
        <div className="shop_aloe">
      <Card>
        <Card.Img variant="top" src={"./images/supp1.jpg"} />
        <Pop name={'Green Tea Pills'} info={'Organic green tea pills for fat loss - 50 pills.'} price={'8$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp2.jpg"} />
        <Pop name={'Wild Fruit Multivitamins'} info={'Organic multivitamins - 50 pills.'} price={'10$'}/>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp3.jpg"} />
        <Pop name={'Broccoli Food Supplement'} info={'Organic broccoli pills, for better digestion - 45 pills.'} price={'9$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp4.jpg"} />
        <Pop name={'Rice Protein'} info={'Homemeade rice protein - 1kg.'} price={'25$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp5.png"} />
        <Pop name={'Soy Protein'} info={'Homemeade soy protein - 1kg.'} price={'30$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp6.jpg"} />
        <Pop name={'Strawberry Flavour Vitamin-B '} info={'Organic strawberry flavour Vitamin-B pills - 30 pills.'} price={'5$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp7.jpg"} />
        <Pop name={'Genjen and Green Tea Leafes'} info={'Organic detox pills infused with green tea leafes and genjen - 40 pills.'} price={'7$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp8.webp"} />
        <Pop name={'Hemp Protein'} info={'Homemeade hemp protein - 1kg.'} price={'35$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp9.jpg"} />
        <Pop name={'Cod Liver Oil Pills'} info={'Supercharge yourself with this healthy supplement - 30 pills.'} price={'12$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp10.jpg"} />
        <Pop name={'Sea Moss and Bladderwrack Capsules'} info={'Rich in vitamins and helps for digestion - 25 pills.'} price={'15$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp11.jpg"} />
        <Pop name={'Caloerie Organizer'} info={'Follow a healthy dietary plan with the help of a organizer.'} price={'35$'}/>
      </Card>
      <Card>
        <Card.Img variant="top" src={"./images/supp12.webp"} />
        <Pop name={'Pea Protein'} info={'Homemeade pea protein - 1kg.'} price={'25$'}/>
      </Card>

    
      </div>
    )
}

export default SuppItems;