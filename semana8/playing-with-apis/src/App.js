import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div `
  text-align: center;
`
const Title = styled.h1 `
  font-family: 'Shadows Into Light', cursive;
`
const Strong = styled.strong `
  font-family: 'Shadows Into Light', cursive;
  font-size: 30px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activityInfo: undefined
    }
  }

  sortActivity = () => {
      const request = axios.get('http://www.boredapi.com/api/activity/') 
      request.then((response) => {
        this.setState ({ activityInfo: response.data})
        console.log (this.state.activityInfo.participants)
        console.log (this.state.activityInfo)
       }) 
    } 


  render () {

    const participants = this.state.activityInfo && this.state.activityInfo.participants
     let simNao = (participants === 1) ? "Sim!" : "Não"
  

  return (
    <Container>
     <Title>
       O que fazer e o que não fazer na quarentena, quando estiver entediado!
     <br/>
      Aperte o botão e descubra!
       </Title>

     <button onClick={this.sortActivity}>botao</button>


     {this.state.activityInfo && (
       <div>
         <p>
           <Strong>Atividade: </Strong> 
           {this.state.activityInfo.activity}
         </p>
         <p>
           <Strong>Tipo:  </Strong> 
           {this.state.activityInfo.type}
         </p>
         <p>
           <Strong>Número de pessoas necessárias: </Strong> 
           {this.state.activityInfo.participants}
         </p>
         <p>
           <Strong>Praticável em tempos de quarentena?! <br/> 
             {simNao}  </Strong> 
              
           
         </p>
       </div>
     )}

    </Container>
  );
  }
}

export default App;
        // simNao = () => {
        //   if (this.state.activityInfo.participants === 1 ) {
        //       return <Strong>Sim!</Strong>
        //   } else {
        //       return <Strong>Não!</Strong>
        //   }
          
        // }
        // const podeOuNao = simNao()
        
//response.data.participants