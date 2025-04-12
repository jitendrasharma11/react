import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Route, Routes } from 'react-router'
import Dasboard from './pages/Dasboard'
import Login from './pages/Login'
import App from './App'
import AddColor from './Pages/AddColor'
import User from './Pages/User'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<App/>} />

        <Route element={ <App/> }>
            <Route path='/dashboard' element={<Dasboard/>} />
            <Route path='/user' element={<User/>} />
            
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
