import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}

          nomeUsuarioDois={'golinho'}
          fotoUsuarioDois={'https://picsum.photos/55/50'}
          fotoPostDois={'https://picsum.photos/250/150'}

          nomeUsuarioTres={'darvinho'}
          fotoUsuarioTres={'https://picsum.photos/65/50'}
          fotoPostTres={'https://picsum.photos/240/150'}

        />
      </div>
    );
  }
}

export default App;
