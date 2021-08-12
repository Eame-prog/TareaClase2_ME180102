import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Dolar, setD] = useState(0);
  const [Euro, setE] = useState(0);
  const [Bitcoin, setB] = useState(0)

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setD((total * 1) / tipo );
    setE((total * 0.85) / tipo );
    setB((total * 0.000022) / tipo )
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Conversor de divisas</h1>

      <p>Dolar: {Dolar}</p>
      <p>Euro: {Euro}</p>
      <p>Bitcoin: {Bitcoin}</p>

      <hr />

       <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={0.85}>Euro</option>
        <option value={0.000022}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
