import Link from "next/link"
import {withRouter} from "next/router"

function Navbar( {router} ) {
    const navs = [
        { text: "Home", href:"/" },
        { text: "About", href:"/about" },
        { text: "Portofolio", href:"/portofolio" },
        { text: "Contact", href:"/contact" },
        // { text: "Home", href:"/" },
    ]

    return (
          <nav className="navbar">
                <div className="container">
                    <Link href="/"><a className="logo">Evriliano.</a></Link>

                    <ul className="nav-links">
                    { navs.map(nav => (
                        <li key={nav.text}><Link href={nav.href}><a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</a></Link></li>
                        ))
                    }
                    </ul>
                </div>
            </nav>
    );
}

export default withRouter(Navbar);