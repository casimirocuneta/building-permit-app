import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className='text-center py-1' style={{ fontSize: '12px' }}>
            &copy; OFFICE OF THE BUILDING OFFICIAL
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
