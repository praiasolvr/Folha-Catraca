import { useState } from "react"


export default function Login() {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")


    function acessar(e) {
        e.preventDefault()
        const usuarioBd = "matheus"
        const senhaBd = "123456"
        if (usuarioBd == usuario) {
            window.location.href = "/menu"
        } else {
            alert("usuario ou senha incorreta!")
        }

    }

    return (
        <>
            <h1>
                Pagina login
            </h1>
            <form onSubmit={acessar}>
                <input
                    required
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => { setUsuario(e.target.value) }}
                />
                <input
                    required
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => { setSenha(e.target.value) }}
                />
                <button type='submit'>
                    acessar
                </button>
            </form>

        </>
    )
}