import { FaBus } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Vistoriar() {
    // =========MINHAS VARIAVEIS========= //
    const [veiculo, setVeiculo] = useState()
    const [catracaFisica, setCatracaFisica] = useState()
    const [catracaTacom, setCatracaTacom] = useState()
    const { id } = useParams();
    const [data, setData] = useState()
    // TODO: CRIAR AS VARIAVEIS AQUI... 
    // =========MINHAS VARIAVEIS========= //


    // =========MINHAS FUNÇÕES========= //
    useEffect(() => {
        setVeiculo(id)
    }, [])


    function RegistrarCatraca(e) {
        e.preventDefault()
        alert("pg")
    }
    // TODO: DESENVOLVER AS FUNÇÕES AQUI...
    // =========MINHAS FUNÇÕES========= //


    // =========RETORNO DA PAGINA ========= //
    return (
        <div className='conteiner-folha-catraca'>
            {/* <div className='controladores-veiculos'>

                <button className='veiculos-vistoriados' onClick={() => { alert('ola') }}>
                    <FaBus />
                    Viculos vistoriados
                </button>

                <button className='veiculos-pensentes' onClick={() => { alert('ola') }}>
                    <FaBus />
                    Viculos pendentes
                </button>
            </div> */}

            <h1>Folha de catraca</h1>
            <div className="campoDate">
                <h2>Data: {data} </h2>

            </div>
            <form onSubmit={RegistrarCatraca}>
                {/* <input
                    required
                    type="number"
                    placeholder='Numero veiculo'
                    value={veiculo}
                    onChange={(e) => { setVeiculo(e.target.value) }} /> */}
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
                            <input type="radio" id="SIM-fechada" name="fechada" value="SIM-fechada" required />
                            <label for="SIM-fechada">SIM</label>
                        </div>
                        <div>
                            <input type="radio" id="NAO-fechada" name="fechada" value="NAO-fechada" required />
                            <label for="NAO-fechada">NÃO</label>
                        </div>
                    </div>
                </div>

                <div className='conteiner-eu-fechei'>
                    <p><strong>* </strong>Foi eu que fechei?</p>
                    <div className='conteiner-resp-eu-fechei'>
                        <div>
                            <input type="radio" id="SIM-fechei" name="fechei" value="SIM-fechei" required />
                            <label for="SIM-fechei">SIM</label>
                        </div>

                        <div>
                            <input type="radio" id="NAO-fechei" name="fechei" value="NAO-fechei" required />
                            <label for="NAO-fechei">NÃO</label>
                        </div>
                    </div>
                </div>

                <button type='submit'>
                    Registrar
                </button>
            </form>
        </div>)
    // =========RETORNO DA PAGINA ========= //
}