import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const GuestHeader = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='bg-white'
        variant='light'
        className='py-1'
      >
        <img
          alt=''
          src='assets/logo/Ootb-logo.png'
          width='60'
          height='60'
          className='d-inline-block mr-1'
        />
        <Navbar.Brand href='/' className='brand-name'>
          OFFICE OF THE BUILDING OFFICIAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/contact-us'>Contact Us</Nav.Link>
            <div className='vertical-line'></div>
            <Nav.Link href='/downloadable-forms'>Downloadable Forms</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default GuestHeader
