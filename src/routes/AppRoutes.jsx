import { Routes, Route, BrowserRouter } from "react-router-dom"

import Vistoriar from "../pages/Vistoriar.jsx"
import Login from "../pages/Login.jsx"
import Menu from "../pages/Menu.jsx"
import Frotas from "../pages/Frota/Frotas.jsx"
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/frotas" element={<Frotas />} />
                <Route path="/vistoriar" element={<Vistoriar />} />

            </Routes>
        </BrowserRouter>


    )
}