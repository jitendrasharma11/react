import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LeftSide from './Pages/LeftSide'
import { Outlet } from 'react-router'
import Header from './Common/Header'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full  grid grid-cols-[20%_auto]'>
      <div className=""> <LeftSide/> </div>
      <div className="">
        <Header/>
         <Outlet/>
         <Footer/>
        </div>
     </div>
    </>
  )
}

export default App
