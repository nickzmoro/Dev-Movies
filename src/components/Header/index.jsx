import { HeaderBox, NavList, List } from "./styles.js";
import { HiUser } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom'

import { useState } from 'react'

export function Header() {

    const { pathname } = useLocation();
    const [ changeBackground, setChangeBackground ] = useState(false)

    window.onscroll = () => {
        if(window.scrollY > 80) {
            setChangeBackground(true)
        } else {
            setChangeBackground(false)
        }
    }

    return (
        <HeaderBox changeBackground={changeBackground}>
            <h2>Dev<span>flix</span></h2>
            <NavList>
                <ul>
                    <List isActive={pathname === '/'}>
                        <Link to='/'>Home</Link>
                    </List>
                    <List isActive={pathname.includes('filmes')}>
                        <Link to='/filmes'>Filmes</Link>
                    </List>
                    <List isActive={pathname.includes('series')}>
                        <Link to='/series'>Séries</Link>
                    </List>
                </ul>
                <button id="login">
                    <div className="container-icon">
                        <HiUser className="icon" />
                    </div>
                    <div className="login-txt">
                        <p>Faça Login</p>
                        <span>ou cadastre-se</span>
                    </div>
                </button>
            </NavList>
        </HeaderBox>
    )
}