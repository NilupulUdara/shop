import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components";
import { AllRoutes } from './routes/AllRoutes';

function App() {
 

  return (
    <div>
      <Header/>
      <AllRoutes/>
    </div>
  )
}

export default App
