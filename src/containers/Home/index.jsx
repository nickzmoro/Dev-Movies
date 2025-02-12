import Button from "../../components/Button/index.jsx"
import api from "../../services/api"
import { Background, Poster, HomeContent, ContainerButtons } from './styles.js'

import { useState, useEffect } from 'react'

export function Home() {

    const [movie, setMovie] = useState()

    // useEffect -> efeito colateral
    useEffect(() => {

        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular')

            setMovie(results[1])
            console.log(results[1])
        }

        getMovies()

    }, [])

    return (
        <>
            {movie && (
                <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
                    <HomeContent>
                        <div className="home-int">
                            <div>
                                <h2>Filme popular</h2>
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                            </div>
                            <ContainerButtons>
                                <Button red>Assista agora</Button>
                                <Button>Assista o Trailer</Button>
                            </ContainerButtons>
                        </div>
                        <Poster posterImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></Poster>
                    </HomeContent>
                </Background >
            )}
        </>
    )
}