import { useState } from "react";
import './app.css'

function App(){
   
  const [Num1, setNum1] = useState( );
  const [Num2, setNum2] = useState( );
  const [Res, setRes] = useState( );

  const handleChange1 = (event) => {
    setNum1 (event.target.value);
  }
  const handleChange2 = (event) => {
    setNum2 (event.target.value);
  }
  const handleSumar =(event) =>{
    setRes(parseFloat(Num1)+ parseFloat(Num2));
  }

  const handleRestar =(event) =>{
    setRes(parseFloat(Num1) - parseFloat(Num2));
  }

  const handleMultiplicar =(event) =>{
  
    setRes(parseFloat(Num1) * parseFloat(Num2));
  }

  const handleDividir =(event) =>{
    
    setRes(parseFloat(Num1) / parseFloat(Num2));
  }
  return(
    
    <>
    <h1>Calculadora.</h1>
    <input type="text" placeholder="N1" value={Num1} onChange={handleChange1}/>
    <input type="text" placeholder="N2" value={Num2} onChange={handleChange2}/>
    <hr></hr>
    <button onClick={handleSumar}>SUM</button>
    <button onClick={handleRestar}>RES</button>
    <button onClick={handleMultiplicar}>MULT</button>
    <button onClick={handleDividir}>DIV</button>
    
    <hr></hr>
    <p>Resultado: {Res}</p>
    </>
  )
}
export default App;