import { styled } from 'styled-components'

export const FooterBox = styled.footer`
    background-color: rgba(3, 3, 3, 1);
    margin-top: 80px;
    border-top: 1px solid rgba(256, 256, 256, 0.1);
    padding: 0px 50px;
    width: 100vw;
    height: calc(8vh + 10px);

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MadeBy = styled.div`
    border: 1px solid rgba(256, 256, 256, 0.1);
    border-radius: 12px;
    padding: 10px;

    h2 {
        font-size: 1.4rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
        color: rgba(256, 256, 256, 0.9);

        span {
            color: #FF0000;
            font-weight: 800;
            font-size: 1.1rem;
        }
    }
`

export const BackToTop = styled.div`
    a {
        border: 1px solid rgba(256, 256, 256, 0.1);
        background-color: transparent;
        cursor: pointer;
        padding: 10px;
        border-radius: 12px;
        display: flex;
        transition: 0.2s ease;

        &:hover {
            background-color: rgba(256, 0, 0, 0.1);
        }
    }
`