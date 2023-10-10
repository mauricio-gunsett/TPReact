import { useState } from 'react';

function Punto3(props) {
    const {mensaje: Mensaje} = props;
    const [mensaje, setMensaje] = useState(Mensaje)
  
    const cambiarMensaje = ()=>{
      setMensaje((text)=>{ return text + "(from change state)"})
    }
    return (
      <>
       <h1>Hello {mensaje}</h1>
       <button onClick = {cambiarMensaje}>Click me!</button>
      </>
    )
  }
  export default Punto3
