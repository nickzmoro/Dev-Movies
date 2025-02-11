import styled from 'styled-components'

export const HeaderBox = styled.header`
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;

    & h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2rem;

        span {
            color: red;
        }
    }
`

export const NavList = styled.nav`
    display: flex;
    gap: 20px;

    a {
        font-size: 1.2rem;
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 5px;
        transition: 0.2s ease;

        &:hover {
            color: red;
        }
    }
`