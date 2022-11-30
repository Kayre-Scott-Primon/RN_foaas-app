import axios from 'react-native-axios'

const api = axios.create({
    baseURL: 'https://insult.mattbas.org/api/'
})

export default api