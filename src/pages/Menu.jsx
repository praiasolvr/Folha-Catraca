export default function Menu() {
    function vistoria(e) {
        e.preventDefault()
        window.location.href = "/frotas"
    }

    return (
        <>
            <form onSubmit={vistoria}>
                <h1>
                    Menu
                </h1>
                <p>
                    usuario: Matheus
                </p>
                <input required type="date" />
                <button type="onSubmit">
                    comecar vistoria
                </button>
            </form>
        </>
    )
}