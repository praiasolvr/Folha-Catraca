import { useState } from 'react'
import './App.css'

function App() {
  // =========MINHAS VARIAVEIS========= //
  const [veiculo, setVeiculo] = useState()
  const [catracaFisica, setCatracaFisica] = useState()
  const [catracaTacom, setCatracaTacom] = useState()


  // =========MINHAS VARIAVEIS========= //



  // =========MINHAS FUNÇÕES========= //

  function RegistrarCatraca(e) {
    e.preventDefault()
    alert("pg")
  }

  // =========MINHAS FUNÇÕES========= //
  return (
    <div className='conteiner-folha-catraca'>
      <h1>Folha de catraca</h1>
      <div className="campoDate">
        <h2>Data:10/01/2025 </h2>
      </div>
      <form onSubmit={RegistrarCatraca}>
        <input
          type="number"
          placeholder='Numero veiculo'
          value={veiculo}
          onChange={(e) => { setVeiculo(e.target.value) }} />

        <input
          type="number"
          placeholder='Catrca fisica'
          value={catracaFisica}
          onChange={(e) => { setCatracaFisica(e.target.value) }} />

        <input
          type="number"
          placeholder='Catraca tacom'
          value={catracaTacom}
          onChange={(e) => { setCatracaTacom(e.target.value) }} />
        
        <button type='submit'>
          Registrar
        </button>
      </form>
    </div>)
}

export default App
