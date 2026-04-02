import request from './request'
const googleHost = "https://sheets.googleapis.com/v4/spreadsheets/1V8aFVQE9vJ1mYIL-FpLBIKhlP4-aXmb1sOwfwshKvWI/values/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%20%D1%83%D1%87%D0%B5%D1%82?key=AIzaSyAkOpNzxNQDeGUTOXa4HPXguCFfXcKzQs8"
const serverHost = 'http://node2.fe.a-level.com.ua'

export const getMenu = () => request({
  method: 'GET',
  url: googleHost,
})

export const getPosts = (data) => request({
  method: 'POST',
  url: `${serverHost}/get`,
  data
})

export const addPost = (data) => request({
  method: 'POST',
  url: `${serverHost}/add`,
  data 
})