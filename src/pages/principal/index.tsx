import './principal.css'

import { ReactComponent as Logo } from '../../assets/Logo/Logo.svg'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'


const Principal = () => {
  return (
    <div className='principal'>
      <Header/>
      <div className='principal_ilustracao1'></div>
      <div className='principal_ilustracao2'></div>
      <div>
        <Logo className='principal_logo' />
        <h3 className='principal_titulo'>Boas-Vindas!</h3>
        <p className='principal_texto'>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        <div className='principal_divLink'>
          <button className='principal_links'><Link className='principal_link' to="/login" >Já tenho conta</Link></button>
          <button className='principal_links'><Link className='principal_link' to="/cadastro" >Quero me cadastrar</Link></button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Principal