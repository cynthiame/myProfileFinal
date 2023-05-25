import React from 'react'
import Data from './Data'

const Work = () => {
    return (
        <>
            <section className="work">
                <div className="heading">
                    <h2>MY WORKS</h2>
                    <h1>Some of My Competed Projects</h1>
                </div>
                <div className="content">
                            <>
                            <div className="box">
                                <div className="img grid">
                                <img src={require('./p1.png')} alt="Image Test" />
                                <img src={require('./p2.png')} alt="Image Test" />
                                </div>
                                <div className="overlay">
                                    <div className="text">
                                        <h2>Display</h2>
                                        <p>Here are 2 projects, respectively are built with HTML, CSS, JavaScript and React.</p>
                                    </div>
                                    <div className="fa-div">
                                        <p>Feel free to share! ^^</p>
                                        <h5>If you are interested in my projects, please check my Resume for more detailed info.</h5>
                                        <i className="fa-solid fa-expand"></i>
                                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                    </div>
   
                                </div>
                            </div>
                            </>
                </div>
            </section>
        </>
    )
}

export default Work