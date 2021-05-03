import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer
      style={{
        marginBottom: '0',
        padding: '0',
        textAlign: 'center',
        background: '#0d3206',
      }}
    >
      <Container>
        <Row>
          <Col className='text-center py-3' style={{ color: '#FFF' }}>
            Copyright &copy; Building Official
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
