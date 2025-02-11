import api from "../../services/api"
import { Background } from './styles.js'

export function Home() {

    async function getMovies() {
        const data = await api.get('/movie/popular')

        console.log(data)
    }

    getMovies()

    return (
        <Background img='https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg'>
            <div>
            </div>
        </Background>
    )
}