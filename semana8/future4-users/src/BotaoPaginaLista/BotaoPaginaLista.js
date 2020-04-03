import React from 'react';
import styled from 'styled-components';

const BotaoPraPaginaLista = styled.button `
    border: black 1px solid;
    margin: 10px;
`

class BotaoPaginaLista extends React.Component  {
    render () {
    return (
    <BotaoPraPaginaLista>
    Ir para página lista
    </BotaoPraPaginaLista>
    )
    }
}

export default BotaoPaginaLista;