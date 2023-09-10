import React, {useState} from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header')
        header.classList.toggle('active', window.scrollY > 200)
    })

    return (
        <div>
            <header className="header">
                <div className="container flex">
                    <div className="logo">
                        <Link to='/home'><img src={require('./logo2.png')} alt="logo of the website"/></Link>
                    </div>
                    <div className="nav">
                        <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/interests">Interests</Link></li>
                            {/* <li><Link to="/contact">Contact Me</Link></li> */}
                            <li><Link to="/education">Education and Certificate</Link></li>
                            <ul className="fa-ul" onClick={() => setSidebar(false)}>
                                <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>Checked</li>
                                <li><span className="fa-li"><i className="fa-solid fa-spinner fa-pulse"></i></span>To be Continued</li>
                                <li><span className="fa-li"><i className="fa-regular fa-square"></i></span>Others</li>
                            </ul>
                        </ul>
                    </div>
                    <a href="/contact"><button type="button" className="btn btn-light">Contact Me</button></a>
                </div>
            </header>
        </div>
    )
}

export default Header