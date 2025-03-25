import { useState } from "react"

export default function Menu() {
    const [data, setData] = useState("")

    function vistoria(e) {
        e.preventDefault()
        localStorage.setItem("dataOpercao", data)
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
                <input required type="date"
                    value={data}
                    onChange={(novaData) => { setData(novaData.target.value) }}
                />
                <button type="onSubmit">
                    comecar vistoria
                </button>
            </form>
        </>
    )
}