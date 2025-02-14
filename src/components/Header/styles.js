import styled from 'styled-components'

export const HeaderBox = styled.header`
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;
    transition: 0.2s ease;
    background-color: ${(props) => (props.changeBackground ? '#000' : 'transparent')};
    border-bottom: ${(props) => (props.changeBackground ? '1px solid rgba(256, 256, 256, 0.1)' : 'none')};

    & h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2.2rem;

        span {
            color: red;
        }
    }
`

export const NavList = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;

    ul {
        display: flex;
        gap: 40px;
        margin-right: 20px;
    }

    #login {
        display: flex;
        background-color: #FF0000;
        border: none;
        border-radius: 15px;
        padding: 8px 12px;
        cursor: pointer;
        gap: 8px;
        align-items: center;
        border: 1px solid #FF0000;
        transition: 0.1s ease;

        &:hover {
            filter: saturate(75%);
            border: 1px solid rgba(256, 256, 256, 0.2);
        }

        .container-icon {
            padding: 8px 8px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 50px;
            display: flex;
            align-items: center;
        }

        .login-txt {
            p {
                font-size: 1.1rem;
                font-weight: 600;
                text-align: start;
            }

            span {
                font-size: 0.9rem;
                color: rgba(256, 256, 256, 0.6);
            }
        }
    }
`

export const List = styled.li`
    position: relative;

    &::after {
        content: ' ';
        height: 2px;
        width: ${(props) => (props.isActive ? '100%' : 0)};
        background-color: #FF0000;
        position: absolute;
        bottom: -5px;
        left: 0;
        border-radius: 50px;
        transition: 0.2s ease;
    }

    &:hover::after {
        width: 100%;
        left: 1;
    }

    a {
        font-size: 1.2rem;
        font-weight: 600;
        border-radius: 5px;
        transition: 0.2s ease;
    }
`