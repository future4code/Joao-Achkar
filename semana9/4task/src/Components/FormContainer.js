import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTarefa } from '../actions/todos';

const FormCont = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  width: 700px;
`
const Button = styled.button `
    border: none;
    margin-top: 0;
    border-bottom: 1px solid #00000021;
    height: 65px;
    font-size: 25px;
    width: 10%;
    background-color: white;
    box-sizing: border-box;
    :focus{
        outline: none;
    }
    :hover{
      cursor: pointer;
      background-color: #00000021;
    }
`
const InputToDo = styled.input `
    width: 90%;
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


class FormContainer extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       inputText: '',
       tarefa: ''
     }
   }

   handleOnChange = (event) => {
     this.setState ({inputText: event.target.value})
   }
   
   onClickAddTarefa = () => {
       this.props.addTarefa(this.state.inputText)
       this.setState ({inputText: ''})
   }

  render() {  
 
    return (
      <FormCont>
        <form> {/* DESCOBRIR COMO USAR O ENTER SEM ATUALZIAR A PÁGINA */}
            <InputToDo 
            type="text"
            placeholder="O que fazer?"
            value = {this.state.inputText}
            onChange={this.handleOnChange}
            />
            <Button type="button" onClick={this.onClickAddTarefa}>Add</Button>        
        </form>
      </FormCont>
      
    
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTarefa: (texto) => dispatch (addTarefa(texto))
   
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
) (FormContainer)
