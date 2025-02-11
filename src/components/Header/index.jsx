import { HeaderBox, NavList } from "./styles.js";

export function Header() {
    return (
        <HeaderBox>
            <h2>Dev<span>flix</span></h2>
            <NavList>
                <a href="#">Home</a>
                <a href="#">Filmes</a>
                <a href="#">Séries</a>
            </NavList>
        </HeaderBox>
    )
}