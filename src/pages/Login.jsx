export default function Login() {
    function acessar() {
        window.location.href = "/menu"
    }

    return (
        <>
            <h1>
                Pagina login
            </h1>
            <form action="">
                <input required type="text" placeholder="Usuario" />
                <input required type="password" placeholder="Senha" />
                <button onClick={acessar}>
                    acessar
                </button>
            </form>

        </>
    )
}