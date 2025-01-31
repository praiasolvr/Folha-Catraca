export default function Menu() {
    function vistoria(e) {
        e.preventDefault()
        window.location.href = "/frotas"
    }

    return (
        <>
            <form>
                <h1>
                    Menu
                </h1>
                <p>
                    usuario: Matheus
                </p>
                <input type="date" />
                <button onClick={vistoria}>
                    comecar vistoria
                </button>
            </form>
        </>
    )
}