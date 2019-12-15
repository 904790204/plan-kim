import axios from './axios'

export function saveSheetData (params) {
  return axios.post('sheet/saveSheetData',params)
}
export function getSheetData (params) {
  return axios.post('sheet/getSheetData',params)
}