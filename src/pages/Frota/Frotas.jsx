import { useState } from "react"
import { FaBus } from "react-icons/fa6"

import './Frota.css'
export default function Frotas() {
    const [frotas, setFrotas] = useState([
        { "numVeiculo": 12000, "status": "pendente" },
        { "numVeiculo": 12111, "status": "concluido" },
        { "numVeiculo": 12112, "status": "pendente" },
        { "numVeiculo": 13114, "status": "concluido" }])

    return (
        <>
            <h1>
                Veiculos
            </h1>

            {frotas.map((veiculo) => {
                function verificarStatus(veiculoStatus) {
                    if (veiculoStatus == "pendente") {
                        return <div className="pendente">
                            <FaBus />

                        </div>
                    } else {
                        return <div className="verificado">
                            <FaBus />

                        </div>
                    }

                }
                return <button>
                    {verificarStatus(veiculo.status)}

                    veiculo: {veiculo.numVeiculo}
                    status: {veiculo.status}
                </button>
            })}

        </>
    )
}