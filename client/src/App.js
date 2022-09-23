import React from 'react'
import {Route, Routes} from 'react-router-dom'

import { Navbar, Footer} from './components/index'
import { Home, NewArticle, Setting, Details, UserInfo, SignIn, SignUp } from './pages/index'

import './styles/App.css'

const App = () => {

  return (
    <div className="body">
        <Navbar/>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/create-article" element={<NewArticle/>}/>
                <Route path="/setting" element={<Setting/>} />
                <Route path="/userInfo" element={<UserInfo/>} />
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </div>
        <hr/>
        <Footer/>
    </div>
  )
}

export default App