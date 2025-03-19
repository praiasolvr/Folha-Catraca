export default function Login() {
    function acessar(e) {
        e.preventDefault()   
        window.location.href = "/menu"
    }

    return (
        <>
            <h1>
                Pagina login
            </h1>
            <form onSubmit={acessar}>
                <input required type="text" placeholder="Usuario" />
                <input required type="password" placeholder="Senha" />
                <button type='submit'>
                    acessar
                </button>
            </form>

        </>
    )
}