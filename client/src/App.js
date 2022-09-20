import React from 'react'
import {Route, Routes} from 'react-router-dom'

import { Navbar, Footer} from './components/index'
import { Home } from './pages/index'
import './styles/App.css'

const App = () => {

  return (
    <div className="body">
        <Navbar className="NavBar"/>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home/>} />

            </Routes>
        </div>

        <Footer className="Footer"/>
    </div>
  )
}

export default App