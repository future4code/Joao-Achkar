import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	constructor(props) {
		super(props)

		this.state = {
			textoUsuario: " ",
		}
	}

	onChangeComentario(event) {
		const textoInput = event.target.value
        this.setState({
            textoUsuario: textoInput
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
