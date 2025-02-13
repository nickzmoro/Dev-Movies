import Button from "../../components/Button/index.jsx"
import api from "../../services/api"
import { Background, Poster, HomeContent, ContainerButtons } from './styles.js'
import { Slider } from '../../components/Slider/index.jsx'
import { getImages } from '../../utils/getImages.js'

import { useState, useEffect } from 'react'

export function Home() {

    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()

    // useEffect -> efeito colateral
    useEffect(() => {

        async function getMovies() { // filme popular
            const { data: { results } } = await api.get('/movie/popular')

            setMovie(results[1])
            console.log(results[1])
        }

        async function getTopMovies() { // top filmes
            const { data: { results } } = await api.get('/movie/top_rated')

            setTopMovies(results)
            console.log(results)
        }

        getMovies()
        getTopMovies()

    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
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
                        <Poster posterImg={getImages(movie.poster_path)}></Poster>
                    </HomeContent>
                </Background >
            )}

            { topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider> }
        </>
    )
}