import { HeaderBox, NavList } from "./styles.js";

export function Header() {
    return (
        <HeaderBox>
            <h1>Dev<span>flix</span></h1>
            <NavList>
                <a href="#">Home</a>
                <a href="#">Filmes</a>
                <a href="#">Séries</a>
            </NavList>
        </HeaderBox>
    )
}