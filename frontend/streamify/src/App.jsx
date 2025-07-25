import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import ChatPage from './Pages/ChatPage.jsx'
import NotificationsPage from './Pages/notificationsPage.jsx'
import OnBoardingPage from './Pages/onBoardingPage.jsx'
import CallPage from './Pages/CallPage.jsx'

function App() {

  return (
    <div className='h-screen' data-theme="coffee">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/on-board' element={<OnBoardingPage/>}/>
        <Route path='/notifications' element={<NotificationsPage/>}/>
        <Route path='/chats' element={<ChatPage/>}/>
        <Route path='/calls' element={<CallPage/>}/>

      </Routes>
    </div>
  )
}

export default App
