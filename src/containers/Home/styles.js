import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(360deg, #000 0%, rgba(1, 1, 1, 0) 80%, #000 100%);
        pointer-events: none;
    }
`

// https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg