import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Vistoriar() {
    // =========MINHAS VARIAVEIS========= //
    const [veiculo, setVeiculo] = useState();
    const [catracaFisica, setCatracaFisica] = useState();
    const [catracaEletronica, setCatracaEletronica] = useState();
    const [isClose, setIsClose] = useState();
    const { id } = useParams();
    const [data, setData] = useState();
    // =========MINHAS VARIAVEIS========= //

    // =========MINHAS FUNÇÕES========= //
    useEffect(() => {
        setVeiculo(id);
        setData(localStorage.getItem("dataOpercao"));
    }, []);

    function RegistrarCatraca(e) {
        e.preventDefault();

        // Formatar a data no formato "yyyy-MM-dd"
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toLocaleDateString('pt-BR').split('/').reverse().join('-'); // Exemplo: "2025-03-28"

        const dataToSend = {
            id: veiculo,
            catracaFisica: catracaFisica,
            catracaEletronica: catracaEletronica,
            isClose: isClose,
            data: dataFormatada // Passando a data formatada
        };

        console.log("Dados a serem enviados:", dataToSend);

        fetch('http://localhost:8080/api/vistorias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Catraca registrada com sucesso!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Ocorreu um erro ao registrar a catraca.');
        });
    }
    // =========MINHAS FUNÇÕES========= //

    // =========RETORNO DA PAGINA ========= //
    return (
        <div className='conteiner-folha-catraca'>
            <h1>Folha de catraca</h1>
            <div className="campoDate">
                <h2>Data: {data}</h2>
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
                    value={catracaEletronica}
                    onChange={(e) => { setCatracaEletronica(e.target.value) }} />

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
                                onChange={() => setIsClose(true)}
                            />
                            <label htmlFor="SIM-fechada">SIM</label>
                        </div>
                        <div>
                            <input
                                required
                                type="radio"
                                id="NAO-fechada"
                                name="fechada"
                                value={isClose}
                                onChange={() => setIsClose(false)}
                            />
                            <label htmlFor="NAO-fechada">NÃO</label>
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