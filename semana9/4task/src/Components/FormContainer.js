import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const FormCont = styled.div `
  display: block;
  justify-content: center;
  height: fit-content;
  width: 700px;
  box-shadow: 2px 4px 4px 0 rgba(0,0,0,.2), 0 25px 50px 0 rgba(0,0,0,.1);
`
const InputToDo = styled.input `
    width: 100%;
    padding-left: 70px;
    font-size: 25px;
    height: 65px;
    border: none;
    border-bottom: 1px solid #00000021;
    box-sizing: border-box;
    :focus{
        outline: none;
    }
    ::placeholder{
        font-style: italic;
    }
    
`
const LabelToDo = styled.div `
    display: flex;
    align-items: center;
    margin: 0;
    width: 100%;
    padding-left: 70px;
    font-size: 25px;
    height: 65px;
    border: none;
    border-bottom: 1px solid #00000021;
    box-sizing: border-box;
    
`

class FormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {  
    return (
      <FormCont>
        <form>
            <InputToDo 
            type="text" 
            id="whattodo"
            placeholder="O que fazer?"
            />

        </form>
        <Footer/>
      </FormCont>
      
    
  );
  }
}

export default FormContainer;
