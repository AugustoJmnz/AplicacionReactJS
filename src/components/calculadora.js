import React from 'react';
export default function SumaResta() {

  const [input, setInput] = React.useState({
    num1: "",
    num2: "",
  });

  const [result, setResult] = React.useState();
  const handleInput = function (event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  //SUMA
  const suma = function () {
    setResult((+input.num1) + (+input.num2));
  };

  //MULTIPLICACIÓN
  const mult = function () {
    setResult((+input.num1) * (+input.num2));
  };
  return (

    <div className="container">
      <div>
        <h2><b>Digíte 2 números</b></h2>
        <div className='numeros'>
          <input className="var2" onChange={handleInput} name="num1" value={input.num1} type="text"></input>
          <input className="var2" onChange={handleInput} name="num2" value={input.num2} type="text"></input>
        </div>
      </div>
      <h3>Operaciones</h3>
      <div className='botonessm'>
        <button className="btnsm" onClick={suma}><b>Sumar</b></button>
        <button className="btnsm" onClick={mult}><b>Multiplicar</b></button>
      </div>
      <div>
        <h3 className='result'>El resultado es: <div className='finalc'> <b>{result} </b></div> </h3>
      </div>
    </div>
  );
}