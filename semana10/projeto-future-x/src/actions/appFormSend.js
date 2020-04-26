import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/joaopfa-hamilton"

export const setAllCandidates = (allCandidates) => {
  return {
    type: "SET_ALL_CANDIDATES",
    payload: {
      allCandidates: allCandidates
      
    }
  }
}

// Ações Síncronas

// Ações assíncronas

  export const registerCandidate = candidate => async (dispatch, getState) => {
    const body = {
      name,
      age,
      applicationText,
      profession,
      country
    };
    const response = await axios.post(
      `${baseUrl}/trips/NoIFVcOiSgTKTIPVZwXS/apply`, body
      );
      console.log(response.data.id)
  
    dispatch(setAllCandidates());
  };
  

