import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Cadastro from "./pages/cadastro"
import Home from "./pages/home"
import Login from "./pages/login"
import Mensagem from "./pages/mensagem"
import Principal from "./pages/principal"
import Usuario from "./pages/usuario"

const Rotas = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mensagem" element={<Mensagem/>}/>
        <Route path="/usuario" element={<Usuario/>}/>
      </Routes>
    </Router>
  )
}

export default Rotas