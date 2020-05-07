import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaopfa-hamilton'


/////////////////////////////AÇÕES SÍNCRONAS INÍCIO
export const setProfile = (profile) => {
	return {
		type: "SET_PROFILE",
		payload: {
			profile
		}
	}
}
export const setMatches = (matches) => {
	return {
		type: "SET_MATCHES",
		payload: {
			matches
		}
	}
}
/////////////////////////////AÇÕES SÍNCRONAS FIM




/////////////////////////////ACÕES ASSÍNCRONAS INÍCIO
export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}/clear`)
}



export const getProfile = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}/person`)
	console.log(response.data.profile)
	dispatch(setProfile(response.data.profile))
}

export const swipeChoosenProfile = (id, choice) => async (dispatch) => {
	 const body = {
	 	id,
	 	choice
	 }
	const response = await axios.post (`${baseUrl}/choose-person`, body)
	console.log(response.data.id)
	dispatch(getProfile())
} 


 export const showMatches = () => async (dispatch) => {
 	const response = await axios.get(`${baseUrl}/matches`)
	 dispatch(setMatches(response.data.matches))
 }


/////////////////////////////ACÕES ASSÍNCRONAS FIM




// export const likeProfile = () => ({
// 	type: "LIKE_PROFILE",
// 	payload: {
// 	   id,
// 	   choice
	   
// 	}
  
  
// {
//  		"matches": [
//  		  {
//  			"id": "71gMbZs2txS9LDvGK5Ew",
//  			"age": 26,
//  			"name": "Anitta",
//  			"photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
//  			"bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
//  		  }
//  		]
//  	  }




