import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaopfa-hamilton'


export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}/clear`)
}



export const getProfile = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}/person`)
	console.log(response.data.profile)
	dispatch(setProfile(response.data.profile))
}

/////////////////////////////ACÕES ASSÍNCRONAS FIM

/////////////////////////////AÇÕES SÍNCRONAS INÍCIO
export const setProfile = (profile) => {
	return {
		type: "SET_PROFILE",
		payload: {
			profile
		}
	}
}





// export const getMatches = () => async (dispatch) => {
// 	await axios.get(`${baseUrl}/matches`)
// 	{
// 		"matches": [
// 		  {
// 			"id": "71gMbZs2txS9LDvGK5Ew",
// 			"age": 26,
// 			"name": "Anitta",
// 			"photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
// 			"bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
// 		  }
// 		]
// 	  }

// }