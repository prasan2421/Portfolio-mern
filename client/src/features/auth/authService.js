import axios from 'axios'
import qs from 'qs';
const API_URL = process.env.NEXT_PUBLIC_HOST+'/admins/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {

  const response = await axios.post(API_URL + 'login', qs.stringify(userData))
  // .then(function (response) {
   
  //   alert(JSON.stringify(response))
  // })
  // .catch(function (error) {
    
   
  //   alert(JSON.stringify(error))
  // })
  // return;

  if (response.data) {
    // alert(JSON.stringify('trete'));return;
  
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  s
  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService