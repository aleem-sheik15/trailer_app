import React, { useRef, useState } from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router'
const Navbar = () => {
    const [theme, setTheme] = useState("dark");
    let changeTheme = () => {
        theme == "dark" ? setTheme("sun") : setTheme("dark");
        window.document.body.classList.toggle("light");
    }
    return (
        <div className={style.container}>
            <nav>
                <div className={style.logo}>
                    <h1>
                        <Link to={'/'}>
                            <i className="fa-solid fa-film"></i>
                            <p>TFI</p>
                        </Link>
                    </h1>
                </div>

                <ul className={style.navLinks}>
                    <li><Link to={"/"}><i className="fa-solid fa-house-chimney"></i><span>Home</span></Link></li>
                    <li><Link to={"/latest"}><i className="fa-solid fa-book"></i><span>Latest</span></Link></li>
                    <li><Link to={"/year"}><i className="fa-solid fa-calendar-days"></i><span>By Years</span></Link></li>
                    <li><Link to={"/geners"}><i className="fa-solid fa-layer-group"></i><span>Geners</span></Link></li>
                    <li><Link to={"/about"}><i className="fa-solid fa-info"></i><span>About</span></Link></li>
                </ul>

                <div className={style.nav_right}>
                    <div className={style.search}>
                        <input type="search" placeholder='search ' />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className={style.Mode} onClick={changeTheme}>
                        {theme == "dark" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar