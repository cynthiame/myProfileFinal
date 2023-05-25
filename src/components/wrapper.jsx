import React from 'react';
import Data from './Data';

const Wrapper = () => {
    const data = [
        {
          title: "LOOKING FOR EXCLUSIVE SERVICES?",
          heading: "Get The Best For Your Business",
        }
      ]
    return (
        <>
            <section className='branding wrapper'>
                <div className="container">
                    {data.map((val) => {
                        return (
                            <div className="box">
                                <h3>{val.title}</h3>
                                <h2>{val.heading}</h2>
                                <p>As a self-studying Front-End Developer, I possess a strong foundation in HTML, CSS, and JavaScript skills. I am proficient in using React and have experience working with databases. One of my key strengths is problem-solving - I enjoy analysing issues and finding solutions to them.</p>
                                <p>Additionally, I am a cooperative individual who can efficiently discuss ideas with coworkers and others. I believe that teamwork is essential in achieving the best possible outcome.</p>
                                <p>My ability to analyze complex issues coupled with my technical skills makes me a valuable addition to any team.</p>
                                <a href="/contact">
                                    <button className="btn-primary">Contact Me</button>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Wrapper