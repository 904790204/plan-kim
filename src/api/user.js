import axios from './axios'

export function login () {
  return axios.post('user/login')
}
export function logout () {
  return axios.post('user/logout')
}