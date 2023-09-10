import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box">
                        <Link to='/home'><img src={require('./logo2.png')} alt="Image Test" /></Link>
                        <div className="fa-div">
                            <a href="https://github.com"><i className="fa fa-brands fa-github"></i></a>
                            <i className="fa fa-regular fa-envelope"></i>
                            <a href="https://www.linkedin.cn/"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <h4 className='sen'>Thank you for reading my website💕 And feel free to connect me!</h4>
                    </div>
                </div>
                
                <div className="box">
                    <h2>Quick Links:</h2>
                    <ul className='links'>
                        <a href="/home"><li>Home</li></a>
                        <a href='/contact'><li>Contact</li></a>
                    </ul>
                </div>
                <div className="legal container">
                    <p>Copyright @2023. All rights reserved.</p>
                    <label htmlFor="">
                        Design & Developed by <span>Cynthia Xu</span>
                    </label>
                </div>
            </footer>
        </>
    )
}

export default Footer