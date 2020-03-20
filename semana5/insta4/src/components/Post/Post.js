import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curtido: false,
      numeroCurtidas: 0,
      comentando: true,
      numeroComentarios: 0,
      posts: [
        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: "golinho",
          fotoUsuario: "https://picsum.photos/50/52",
          fotoPost: "https://picsum.photos/200/151"
        },
        {
          nomeUsuario: "darvinho",
          fotoUsuario: "https://picsum.photos/50/51",
          fotoPost: "https://picsum.photos/200/152"
        },
      ]
    }
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if(this.state.curtido === false) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas -1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    console.log("Um novo comentário")
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }





  publicaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const feedPosts = [...this.state.posts, novoPost];

    this.setState({ posts: feedPosts });
    this.setState({ valorInputNomeUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  onChangeInputUsuario = event => {

    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFoto = event => {

    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputPost = event => {

    this.setState({ valorInputFotoPost: event.target.value });
  };





  render() {

     let iconeCurtida

     if(this.state.curtido) {
       iconeCurtida = iconeCoracaoPreto
     } else {
       iconeCurtida = iconeCoracaoBranco
     }

     let componenteComentario

     if(this.state.comentando) {
       componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
     }

    const listaDePosts= this.state.posts.map((post, index, array) => {
      return (

        <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={post.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{post.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={post.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
      );
    });

    return (
      
<div>
<input
      value={this.state.valorInputNomeUsuario}
      onChange={this.onChangeInputUsuario}
      placeholder={"Username"}
    />
    <input
      value={this.state.valorInputFotoUsuario}
      onChange={this.onChangeInputFoto}
      placeholder={"Userphoto"}
    />
    <input
      value={this.state.valorInputFotoPost}
      onChange={this.onChangeInputPost}
      placeholder={"Photo you wanna post"}
    />
    <button onClick={this.publicaPost}>Publicar</button>
  {listaDePosts}
</div>
    )


/*
{ 
    return <div>
    
    <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div> 

    
    </div>}*/
  }
}

export default Post