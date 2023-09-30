import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './index.css'
// import Ejercicio1 from './pages/Ejercicio1.jsx'
import { Ejercicio2 } from './pages/Ejercicio2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ejercicio2 titulo ="mi amigo"/>
  </React.StrictMode>,
)
