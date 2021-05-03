import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Screens
import HomeScreen from './screens/HomeScreen'

// Component
import GuestHeader from './components/user/GuestHeader'
import Footer from './components/user/Footer'

const App = () => {
  return (
    <>
      <GuestHeader />
      <main>
        <Switch>
          <Route path='/' component={HomeScreen} exact />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
