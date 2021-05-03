import React from 'react'
import { Container } from 'react-bootstrap'
import GuestHeader from './components/user/GuestHeader'
import Footer from './components/user/Footer'

const App = () => {
  return (
    <>
      <GuestHeader />
      <main>
        <Container>
          <h3>Hello</h3>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
