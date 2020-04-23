import axios from "axios";
import {routes} from '../containers/Router'
import push from '../containers/LoginPage/index'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/joaopfa-hamilton"


export const logIn = (email, password) => async (dispatch) => {
    const response = await axios.post(
    `${baseUrl}/login`,
    {
      email,
      password
    }
    
  )
  window.localStorage.setItem("token", response.data.token) //pq tem isso no slide e n tem no sandbox
  dispatch(push(routes.home)) 
  console.log(logIn)
}
