import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Route, Routes } from 'react-router'
import Dasboard from './pages/Dasboard'
import Login from './pages/Login'
import App from './App'
import AddColor from './Pages/AddColor'
import User from './Pages/User'
import Adduser from './Adduser'
import ViewUser from './Pages/ViewUser'
import Orders from './Pages/orders'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<App/>} />

        <Route element={ <App/> }>
            <Route path='/dashboard' element={<Dasboard/>} />
            
            <Route path='dashboard/user'>
                <Route path='add' element={<Adduser/>}/>
                <Route path='view' element={<ViewUser/>}/>
            </Route>
            <Route path='dashboard/orders'>
                <Route path='orders' element={<Orders/>}/>  
            </Route>
            
            
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
