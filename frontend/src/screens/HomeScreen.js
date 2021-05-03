import React from 'react'
import { Row, Col, Card, Form, Button, Container } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          as='div'
          className='image-banner'
          style={{ backgroundImage: 'url(./assets/img/sample.jpg)' }}
        >
          <Row className='login-form'>
            <Col
              as='div'
              className='d-flex align-items-center justify-content-end'
            >
              <Card style={{ width: '20rem' }} bg='light'>
                <Card.Title className='text-center pt-3'>Login</Card.Title>
                <hr />
                <Card.Body>
                  <Form>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Control type='email' placeholder='Enter Username' />
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                      <Form.Control
                        type='password'
                        placeholder='Enter Password'
                      />
                    </Form.Group>
                    <Button variant='success' type='submit'>
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='article-main'>
        <Col xs={12} xl={1} className='article-logo'>
          <img src='assets/logo/logo-main.png' alt='/' />
          <img src='assets/logo/OurhomeLogo.jpg' alt='/' />
        </Col>
        <Col xs={12} xl={2} className='article-text'>
          <h6>City of Las Piñas</h6>
          <p>
            Alabang-Zapote Rd, Las Piñas NCR <br /> Philippines <br />
            laspinascitygov@yahoo.com <br />
            Monday - Friday | 8am - 5pm
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
