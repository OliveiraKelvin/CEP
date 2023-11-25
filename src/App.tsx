import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { api } from './services/api';
import './styled.css';



const App = () => {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  const handleSearch = () => {
    if(input === ''){
      alert('Preencha o CEP')
      return;
    }
    try{
      const response = api.get(`${input}/json`)
        setCep(response);
        setInput('');

    }catch{
      alert('OPS ERRO AO BUSCAR' )
      setInput('');
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Find CEP</h1>

      <div className='containerInput'>
        <input
        type='text'
        placeholder='Digite seu CEP'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {} </h2>
          <span>Rua:{} </span>
          <span>Complemento:{}</span>
          <span>Bairro:{}</span>
          <span>{}</span>
        </main>
      )}
      
    </div>
  )
}

export default App;

