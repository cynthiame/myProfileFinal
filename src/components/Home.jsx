import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const HomeTest = () => {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <section className="home">
                <div className="container flex">
                    <div className="left">
                        <div className="img">
                            <img src={require('./home.JPG')} alt="Image Test"/>
                        </div>
                    </div>
                    <div className="right topMargin">
                        <h1>
                            I AM A <br />
                            FRONTEND DEVELOPER
                        </h1>
                        <div className="fa-div">
                            <a href="https://github.com"><i className="fa fa-brands fa-github"></i></a>
                            <a href="https://outlook.com/"><i className="fa fa-regular fa-envelope"></i></a>
                            <a href="https://www.linkedin.cn/"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <p>These are my social accounts, let's connect!</p>
                        <a href='https://outlook.live.com/'>
                            <button type="button" className="btn btn-primary">Contain Me</button>
                        </a>
                    </div>   
                </div>
            </section>
        </div>
    )
}

export default HomeTest;