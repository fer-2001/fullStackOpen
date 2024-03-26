import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const putNew = (person) =>{
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}
  
const quit = (id, person) => {
    const request = axios.delete(`${baseUrl}/${id}`, person)
    return request.then(response => response.data)
}


export default { getAll, quit, putNew }
