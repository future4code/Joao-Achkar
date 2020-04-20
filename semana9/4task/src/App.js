import React from 'react';
import styled from 'styled-components';
import Title from './Components/Title';
import FormContainer from './Components/FormContainer';
import Footer from './Components/Footer';
import TaskList from './Components/TaskList';

const MainCont = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #F5F5F5;
`
const SubCont = styled.div `
  display: block;
  justify-content: center;
  height: fit-content;
  width: 70%;
  box-shadow: 2px 4px 4px 0 rgba(0,0,0,.2), 0 25px 50px 0 rgba(0,0,0,.1);

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
      <SubCont>
      <FormContainer/>
      <TaskList/>
      <Footer/>
      </SubCont>
    </MainCont>
  );
  }
}

export default App;
