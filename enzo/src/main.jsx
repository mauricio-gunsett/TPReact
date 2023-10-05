import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Punto2 from './assets/punto2/Punto2.jsx'
// import Punto1 from './assets/punto1/Punto1.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 {/* {<Punto1 />} */}
 <Punto2 friend = 'My friend'/>
  </React.StrictMode>,
)
