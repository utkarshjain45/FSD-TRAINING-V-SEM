import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './component/dashboard'
import ListProducts from './component/ListProducts'

function App() {
  return (
    <div>
      <Dashboard />  
      <ListProducts />  
    </div>
  )
}

export default App
