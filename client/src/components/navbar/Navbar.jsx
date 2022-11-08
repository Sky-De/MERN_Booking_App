import "./navbar.scss"
const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__Container">
            <a href="./" className="navbar__logo">LOGO</a>
            <div className="navbar__Items">
                <button className="navbar__Button">Register</button>
                <button className="navbar__Button">Login</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar