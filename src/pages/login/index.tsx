import Header from "../../components/header"
import { ReactComponent as Logo } from '../../assets/Logo/LogoAzul.svg'
import { ReactComponent as Patas } from '../../assets/patas/patas.svg'
import './login.css'
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required()
  })

  const { register, handleSubmit,formState} = useForm({
    resolver: yupResolver(schema)
  })


  const newUser = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <Header />
      <Patas className="cadastro_patas" />
      <Logo className="cadastro_logo" />
      <p className="login_texto">Já tem conta? Faça seu login:</p>
      <div >
        <form action="" className="cadastro_formulario" onSubmit={handleSubmit(newUser)}>
          <label htmlFor="Email">Email</label>
          <input type="text" placeholder='Escolha seu melhor email' {...register("email")} />
          {formState.errors.email?.message && <p>Email invalido</p>}
          <label htmlFor="Senha">Senha</label>
          <input type="text" placeholder='Digite uma senha' />
          <Link to="/esqueciminhasenha" className="login_senha">Esqueci minha senha</Link>
          <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login