import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header> <h1>FutureTube</h1> <input type="search" placeholder="Busca"/> </header>
     
     {/* <!-- Início Menu lateral esquerdo --> */}
     <div class="barralat">
         <nav>
             <a href="https://joaopf4.github.io/futuretube/"><div className="linkmenu">Início</div></a>
             <a href=""><div className="linkmenu">Em alta</div></a>
             <a href=""><div className="linkmenu">Inscrições</div></a>
             <a href=""><div className="linkmenu">Originais</div></a>
             <a href=""><div className="linkmenu">Bibliotecas</div></a>
             <a href=""><div className="linkmenu">Histórico</div></a>
         </nav>
     </div>
     {/* <!-- Fim Menu lateral esquerdo --> */}
 
 <section>
     <div id="video1" className="videos"> <a href="video1.html"><img src={require("./imgs/história irlanda.png")} alt="História da Irlanda"/>  História da Irlanda</a> </div>
     <div id="video2" className="videos"> <a href="video2.html"><img src={require("./imgs/hemaceas.png")} alt="Hemáceas"/>  Hemáceas em ação</a> </div>
     <div id="video3" className="videos"> <a href="video3.html"><img src={require("./imgs/crayzura.png")} alt="Espaço Sideral"/> Espaço Sideral</a> </div>
     <div id="video4" className="videos"> <a href="video4.html"><img src={require("./imgs/guarapari.png")} alt="Guarapari"/> Guarapari  </a> </div>
     <div id="video5" className="videos"> <a href="video5.html"><img src={require("./imgs/chuvao.png")} alt="Ciclone"/>  Ciclone</a> </div>
     <div id="video6" className="videos"> <a href="video6.html"><img src={require("./imgs/coelho.png")} alt="Coelho"/>  Coelho</a> </div>
     <div id="video7" className="videos"> <a href="video7.html"><img src={require("./imgs/brisado.png")} alt="Galáxia"/>  Galáxia </a> </div>
     <div id="video8" className="videos"> <a href="video8.html"><img src={require("./imgs/espacelego.png")} alt="Espaçonave"/> Espaçonave</a> </div>
 </section>
 
 <footer> Footerzão</footer>
    </div>
  );
}

export default App;
