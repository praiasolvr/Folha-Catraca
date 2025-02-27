import { useState } from "react"
import { FaBus } from "react-icons/fa6"

import './Frota.css'
export default function Frotas() {
    const [frotas, setFrotas] = useState([
        { "numVeiculo": 12001, "status": "pendente", empresa: "Praia Sol", tipoEquipamento: "Articulado" },
        { "numVeiculo": 12002, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Convencional" },
        { "numVeiculo": 12003, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Convencional" },
        { "numVeiculo": 12004, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Convencional" },
        { "numVeiculo": 12005, "status": "pendente", empresa: "Praia Sol", tipoEquipamento: "Convencional" },
        { "numVeiculo": 12006, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Convencional" },
        { "numVeiculo": 12007, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Convencional" },
        { "numVeiculo": 12008, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Convencional" },
        { "numVeiculo": 12009, "status": "pendente", empresa: "Praia Sol", tipoEquipamento: "Convencional Bike" },
        { "numVeiculo": 12010, "status": "pendente", empresa: "Praia Sol", tipoEquipamento: "Convencional Bike" },
        { "numVeiculo": 12011, "status": "pendente", empresa: "Praia Sol", tipoEquipamento: "Convencional Bike" },
        { "numVeiculo": 12012, "status": "pendente", empresa: "Praia Sol", tipoEquipamento: "Convencional Bike" },
        { "numVeiculo": 12013, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Micro Onibus" },
        { "numVeiculo": 12014, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Micro Onibus" },
        { "numVeiculo": 12015, "status": "concluido", empresa: "Praia Sol", tipoEquipamento: "Micro Onibus" },
        { "numVeiculo": 1301, "status": "concluido", empresa: "Vereda", tipoEquipamento: "Micro Onibus Mão na Roda" },
        { "numVeiculo": 1302, "status": "pendente", empresa: "Vereda", tipoEquipamento: "Micro Onibus Mão na Roda" }])

    return (
        <>
            <h1>
                Veiculos
            </h1>

            <div className="container-pesquisa">
                <input type="text" placeholder="Pesquisar um veículo"/>
            </div>

            <div className="lista-veiculos">
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
            </div>
        </>
    )
}