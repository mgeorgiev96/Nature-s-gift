import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Popover from './Popover'

function Email() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMessage = ()=>{
      setShow(false)
      let pop = document.querySelector('.popover_message')
      pop.classList.add('show_message')
      setInterval(()=>{
        pop.classList.remove('show_message')
      },12000)
    }
  
    return (
      <>
        <Button onClick={handleShow}>
          Email Us
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Personal Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" min="0"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Your Goal</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Lose Weight</option>
        <option>Build Muscle</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control type="text">
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info" onClick={handleMessage}>
              Send
            </Button>
            <Popover/>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Email;
