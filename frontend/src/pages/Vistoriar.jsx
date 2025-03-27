import { FaBus } from "react-icons/fa6"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Vistoriar() {
    // =========MINHAS VARIAVEIS========= //
    const [veiculo, setVeiculo] = useState()
    const [catracaFisica, setCatracaFisica] = useState()
    const [catracaTacom, setCatracaTacom] = useState()
    const [isClose, setIsClose] = useState()
    const { id } = useParams()
    const [data, setData] = useState()
    // TODO: CRIAR AS VARIAVEIS AQUI... 
    // =========MINHAS VARIAVEIS========= //


    // =========MINHAS FUNÇÕES========= //
    useEffect(() => {
        setVeiculo(id)
        setData(localStorage.getItem("dataOpercao"))
    }, [])


    function RegistrarCatraca(e) {
        e.preventDefault()
        alert("valor de isClose é " + isClose)
    }
    // TODO: DESENVOLVER AS FUNÇÕES AQUI...
    // =========MINHAS FUNÇÕES========= //


    // =========RETORNO DA PAGINA ========= //
    return (
        <div className='conteiner-folha-catraca'>

            <h1>Folha de catraca</h1>
            <div className="campoDate">
                <h2>Data: {data} </h2>

            </div>
            <form onSubmit={RegistrarCatraca}>

                <h2> Veículo: {veiculo} </h2>
                <input
                    required
                    type="number"
                    placeholder='Catrca fisica'
                    value={catracaFisica}
                    onChange={(e) => { setCatracaFisica(e.target.value) }} />
                <input
                    required
                    type="number"
                    placeholder='Catraca tacom'
                    value={catracaTacom}
                    onChange={(e) => { setCatracaTacom(e.target.value) }} />


                <div className='conteiner-viagem-fechada'>
                    <p><strong>* </strong>Viagem fechada?</p>
                    <div className='conteiner-resp-viagem-fechada'>
                        <div>
                            <input
                                required
                                type="radio"
                                id="SIM-fechada"
                                name="fechada"
                                value={isClose}
                                onChange={(e) => { setIsClose(true) }}
                            />
                            <label for="SIM-fechada">SIM</label>
                        </div>
                        <div>
                            <input
                                required
                                type="radio"
                                id="NAO-fechada"
                                name="fechada"
                                value={isClose}
                                onChange={(e) => { setIsClose(false) }}
                            />
                            <label for="NAO-fechada">NÃO</label>
                        </div>
                    </div>
                </div>

                <button type='submit'>
                    Registrar
                </button>
            </form>
        </div>
    )
    // =========RETORNO DA PAGINA ========= //
}