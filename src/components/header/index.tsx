import "./header.css";
import { ReactComponent as Casa } from '../../assets/header/celular/casa.svg'
import { ReactComponent as Mensagem } from '../../assets/header/celular/mensagem.svg'
import { ReactComponent as Logo } from '../../assets/Logo/Logo.svg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_conteudo">
        <Logo className="header_Logo" />
        <Link to="/home"><Casa className='header_casa' /></Link>
        <Link to="/mensagem"><Mensagem className='header_mensagem' /></Link>
      </div>
    </div>
  )
}

export default Header;