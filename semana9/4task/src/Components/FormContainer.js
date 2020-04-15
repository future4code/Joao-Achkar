import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTarefa } from '../actions/todos';

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
   }


  render() {  
 
    return (
      <FormCont>
        <form>
            <InputToDo 
            type="text"
            placeholder="O que fazer?"
            value = {this.state.inputText}
            onChange={this.handleOnChange}
            />
            <button type="button" onClick={this.onClickAddTarefa}>Vai</button>

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
    addTarefa: (texto) => {
      const action = addTarefa(texto)
      console.log(action)
      dispatch(addTarefa(texto))
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
) (FormContainer)
