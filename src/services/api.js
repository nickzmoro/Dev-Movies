import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '2a3ebd1073aaa24193218b2468c71957',
        language: 'pt-BR',
        page: 1
    }
})

export default api