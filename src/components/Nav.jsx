import { lightLogo } from "../assets/images"
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="header-container">
      <nav className="nav">
        {/* logo */}
        <a href="/" className="link">
          <img src={ lightLogo } alt="site-logo" width={180} className="" />
        </a>
        {/* menu */}
        <ul className="flex gap-12 max-xl:gap-7 max-[1100px]:gap-3 max-lg:hidden">
        {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="menu-items"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* login */}
        <div className="login">
          <a href="#" className="link">Login</a>
        </div>
        </nav>
    </header>
  )
}

export default Nav;