import React from 'react';
import styled from 'styled-components';
import Title from './Components/Title';
import FormContainer from './Components/FormContainer';

const MainCont = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #F5F5F5;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {  
    return (
    <MainCont>
      <Title/>
      <FormContainer/>
    </MainCont>
  );
  }
}

export default App;
