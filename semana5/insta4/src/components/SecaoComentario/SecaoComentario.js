import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	constructor(props) {
		super(props)

		this.state = {
			textoUsuario: " "
		}
	}

	onChangeComentario = (event) => {
		console.log(event.target.value)
    this.setState({
            textoUsuario: event.target.value
        })
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.textoUsuario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			
			
		</div>
	}
}
