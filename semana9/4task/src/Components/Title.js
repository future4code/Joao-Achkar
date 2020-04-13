import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1 `
    color: #B83F45;
    font-size: 80px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 6px;
    margin-bottom: 30px;
`

class Title extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {  
    return (
    <div>
<Titulo>4Task</Titulo>
    </div>
  );
  }
}

export default Title;
