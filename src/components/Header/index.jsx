import Logo from '../../assets/logo.png'

export function Header() {
    return (
        <header>
            <img src={Logo} alt="logo-dev-movies" style={{width: 300}}/>
        </header>
    )
}