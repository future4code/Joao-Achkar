const initialState = {
  profileToSwipe: null,
  matchesAvailable: [],
}

const profiles = (state = initialState, action) => {
  switch(action.type ) {
    case 'SET_PROFILE':{
      const newProfileToSwipe = action.payload.profile
      return {
        ...state,
        profileToSwipe: newProfileToSwipe
      }
    }

    case 'SET_MATCHES': {
      const matchedProfiles = action.payload.matches
      return {
        ...state, matchesAvailable: matchedProfiles
      }
    }

  }
  return state
}

export default profiles
