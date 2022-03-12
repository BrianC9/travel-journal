import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import datos from './data.js'

function App() {

  const tarjetas = datos.map((data, index) => {
    return (
      <div><Card
        key={index}
        items={data}
      />
      { datos.length > 1  && index !== datos.length - 1  ? <hr className='linea'/>: null}
      </div>
      
      
    )
  })
  return (
    <div className="App">
      <Header />
      {tarjetas}
    </div>
  );
}

export default App;
