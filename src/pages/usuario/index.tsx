import Header from '../../components/header'
import './usuario.css'

const Usuario = ()=>{
  return(
    <>
      <Header/>
      <img src="/assets/usuario/usuario.svg" alt="#" className='Usuario_icone'/>
      <p className='Usuario_texto'>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
      <div className='Usuario_infos'>
        <h3>Perfil</h3>
        <label className='Usuario_label'>Foto</label>
        <img src="/assets/usuario/usuario.svg" alt="#" />
        <label htmlFor="fotoEditar" className='Usuario_fileLabel'>Clique aqui para editar</label>
        <input type="file" name="fotoEditar" id="fotoEditar" className='Usuario_file' />
        <label className='Usuario_label'>Nome</label>
        <input type="text" />
        <label  className='Usuario_label'>Telefone</label>
        <input type="text" />
        <label className='Usuario_label'>Cidade</label>
        <input type="text" />
        <label className='Usuario_label'>Sobre</label>
        <textarea name="" id=""></textarea>
        <button>Salvar</button>
      </div>
    </>
  )
}

export default Usuario;