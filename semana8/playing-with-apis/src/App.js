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
  font-size: 35px;
`
const StrongTwo = styled.strong `
  font-family: 'Shadows Into Light', cursive;
  font-size: 28px;
`
const ActivityInfo = styled.p `
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 2px solid gray
`

const Button = styled.button `
  font-family: 'Shadows Into Light', cursive;
  font-size: 28px;
`

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
`

const SecondContainer = styled.div `
  width: 70%;
  text-align: start;
  
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

     <Button onClick={this.sortActivity}>Descubra!</Button>

<MainContainer>
     {this.state.activityInfo && (
       <SecondContainer>
         <ActivityInfo>
           <Strong>Atividade: </Strong> 
           <StrongTwo>{this.state.activityInfo.activity}</StrongTwo> 
         </ActivityInfo>
         <ActivityInfo>
           <Strong>Tipo:  </Strong> 
           <StrongTwo>{this.state.activityInfo.type}</StrongTwo>
         </ActivityInfo>
         <ActivityInfo>
           <Strong>Número de pessoas necessárias: </Strong> 
           <StrongTwo>{this.state.activityInfo.participants}</StrongTwo>
         </ActivityInfo>
         <ActivityInfo>
           <Strong>Praticável em tempos de quarentena?! </Strong> 
           <StrongTwo>{simNao}</StrongTwo>
           
         </ActivityInfo>
       </SecondContainer>
     )}
</MainContainer>

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