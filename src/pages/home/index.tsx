import Card from "../../components/card"
import Header from "../../components/header"
import { IAnimais } from "../../interfaces/IAnimais"
import {ReactComponent as Usuario} from '../../assets/header/celular/usuario.svg'
import './home.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import http from "../../api"


const Home = ()=>{
  // const animais:IAnimais[] = [{
  //   nome:'Dunga',
  //   idade:'2 anos',
  //   porte:'Porte pequeno',
  //   temperamento:'Calmo e educado',
  //   local:'Rio de janeiro (RJ)',
  //   imagem:"./assets/pets/pet1.svg"
  // },{
  //   nome:'Felicia',
  //   idade:'3 meses',
  //   porte:'Porte pequeno',
  //   temperamento:'Ativa e carinhosa',
  //   local:'Nova Iguaçu (RJ)',
  //   imagem:"./assets/pets/pet2.svg"
  // },{
  //   nome:'Sirius',
  //   idade:'6 meses',
  //   porte:'Porte grande',
  //   temperamento:'Ativo e educado',
  //   local:'Duque de Caxias (RJ)',
  //   imagem:"./assets/pets/pet3.svg"
  // },{
  //   nome:'Fiona',
  //   idade:'3 anos',
  //   porte:'Porte pequeno',
  //   temperamento:'calma e carinhosa',
  //   local:'São Gonçalo (RJ)',
  //   imagem:"./assets/pets/pet4.svg"
  // },{
  //   nome:'Sid',
  //   idade:'8 meses',
  //   porte:'Porte Médio/grande',
  //   temperamento:'Brincalhão e amável',
  //   local:'Rio de janeiro (RJ)',
  //   imagem:"./assets/pets/pet5.svg"
  // },{
  //   nome:'Yoda',
  //   idade:'1 anos',
  //   porte:'Porte Médio',
  //   temperamento:'Ativo e carinhoso',
  //   local:'Nova Iguaçu (RJ)',
  //   imagem:"./assets/pets/pet6.svg"
  // },{
  //   nome:'Lua',
  //   idade:'6 meses',
  //   porte:'Porte médio',
  //   temperamento:'Ativa e carinhosa',
  //   local:'Duque de Caxias (RJ)',
  //   imagem:"./assets/pets/pet7.svg"
  // },{
  //   nome:'Amora',
  //   idade:'45 dias',
  //   porte:'Porte grande',
  //   temperamento:'calma e carinhosa',
  //   local:'São Gonçalo (RJ)',
  //   imagem:"./assets/pets/pet8.svg"
  // },{
  //   nome:'Zelda',
  //   idade:'5 meses',
  //   porte:'Porte médio',
  //   temperamento:'Ativo e amável',
  //   local:'Rio de janeiro (RJ)',
  //   imagem:"./assets/pets/pet9.svg"
  // }]

  const [animais,setAnimais] = useState<IAnimais[]>([]);

  useEffect(()=>{
    http.get('animais')
      .then((resposta)=>{
        setAnimais(resposta.data)
      }).catch((erro)=>{
        console.log(erro)
      })
  })
  return(
    <div>
      <Header/>
      <Link to="/usuario"><Usuario className="home_usuario"/></Link>
      <p className="home_texto">Olá! <br />Veja os amigos disponíveis para adoção!</p>
      <Card animais={animais}/>
      
    </div>
  )
}

export default Home