const initialState = {
  profileToSwipe: null
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
  }
  return state
}

export default profiles
