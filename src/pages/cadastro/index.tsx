import Header from '../../components/header'
import { ReactComponent as Logo } from '../../assets/Logo/LogoAzul.svg'
import { ReactComponent as Patas } from '../../assets/patas/patas.svg'
import './cadastro.css'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const Cadastro = ()=>{
  const schema = yup.object().shape({
    Nome:yup.string().min(3).required(),
    email:yup.string().email().required(),
    senha:yup.string().min(6).required(),
    SenhaNovamente:yup.string().min(6).required(),
  })
  
  const {register,handleSubmit,formState} = useForm({
    resolver:yupResolver(schema)
  })

  
  const newUser = (data:any)=>{
    console.log(data)
  }
  return(
    <div>
      <Header/>
      <Patas className='cadastro_patas'/>
      <div>
        <Logo className='cadastro_logo'/>
        <p className='cadastro_texto'>Ainda não tem cadastro? <br /><br /> Então antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      </div>
      <div >
        <form action="" className='cadastro_formulario' onSubmit={handleSubmit(newUser)}>
          <label htmlFor="Email">Email</label>
          <input type="text" placeholder='Escolha seu melhor email' {...register("email")}/>
          {formState.errors.email?.message && <p>Email Invalido</p>}
          <label htmlFor="Nome">Nome</label>
          <input type="text" placeholder='Digite seu nome completo' {...register("Nome")}/>
          {formState.errors.Nome?.message && <p>Nome Invalido</p>}
          <label htmlFor="Senha">Senha</label>
          <input type="text" placeholder='Crie uma senha' {...register("Senha")}/>
          {formState.errors.senha?.message && <p>Senha Invalida</p>}
         <label htmlFor="ConfSenha">Confirma sua senha</label>
         <input type="text" placeholder='Repita a senha digitada a cima' {...register("SenhaNovamente")}/>
         {formState.errors.SenhaNovamente?.message && <p>Senha Invalida</p>}
         <button>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Cadastro