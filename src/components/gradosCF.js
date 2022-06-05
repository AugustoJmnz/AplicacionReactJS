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

  //Celsius
  const Celsius = function () {
    setResult(((+input.num1) - 32) * 0.5556 + ' °C');
  };

  //Fahrenheit
  const Fahrenheit = function () {
    setResult(((+input.num1) * 1.8) + 32 + ' °F');
  };

  return (
    <div className='temptab'>
      <div >
        <h2><b>Digíte una temperatura</b></h2>
        <div class="digtext">
          <input className='var1' onChange={handleInput} name="num1" value={input.num1} type="text"></input>
        </div>
      </div>
      <h3>Escalas de temperatura</h3>
      <div className='botones'>
        <button className='btn' onClick={Celsius}><b>Celsius</b></button>
        <button className='btn' onClick={Fahrenheit}><b>Fahrenheit</b></button>
      </div> 
      <div class="result">
        <h3>El resultado es: <div className='final'><b>{result}</b> </div></h3>
      </div>
    </div>
  );
}