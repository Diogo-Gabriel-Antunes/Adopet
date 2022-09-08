import Header from '../../components/header';
import './mensagem.css';
import {ReactComponent as Usuario} from '../../assets/header/celular/usuario.svg'
import { Link } from 'react-router-dom';

const Mensagem = ()=>{
  return(
    <div>
      <Header/>
      <Link to="/usuario"><Usuario className="home_usuario"/></Link>
      <p className='mensagem_texto'>Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:</p>
      <div className='mensagem_formulario'>
        <label htmlFor="Nome">Nome</label>
        <input type="text" id='Nome' />
        <label htmlFor="Telefone">Telefone</label>
        <input type="text" id='Telefone' />
        <label htmlFor="NomeAnimal">Nome do animal</label>
        <input type="text" id='NomeAnimal' />
        <label htmlFor="Mensagem">Mensagem</label>
        <textarea name="Mensagem" id="Mensagem" ></textarea>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default Mensagem