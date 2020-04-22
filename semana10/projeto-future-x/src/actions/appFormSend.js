import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/:aluno/trips/joaopfa-hamilton"

// Ações Síncronas


// Ações assíncronas
  

  export const applyToTrip = postText => async (dispatch, getState) => {
    const body = {
      text: postText
    };
    const response = await axios.post(
      `${baseUrl}/apply`, body
      );
      console.log(response.data.id)
  
    dispatch(applyToTrip());
  };
  
