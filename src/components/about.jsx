import React from 'react';

const About = () => {
    const data = [
        {
          title: "Who I Am And What I Do",
          desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
          desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          desc3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          cover: 'src/components/about.jpg',
        },
      ]

    return (
        <>
            <section className="about topMarign">
                <div className="container flex">
                    {
                        data.map((val) => {
                            return (
                                <div>
                                    <div className="heading">
                                        <h3>About Me</h3>
                                        <h1>{val.title}</h1>
                                    </div>

                                    <p>My self-study skills have enabled me to become a front-end developer with a keen eye for detail.</p>
                                    <p>Through several projects, I have honed my abilities to read and understand complex coding languages, identify problems and analyze them in-depth. I have a natural talent for problem-solving and am confident in my ability to work collaboratively with coworkers and others to reach an optimal solution.</p>
                                    <p>Thank you for taking the time to review my website and I look forward to the opportunity of further discussion with you!</p>
                                    <button className='btn btn-primary'>
                                        <a href="./Cynthia Xu - Junior Analyst Programmer - JFE Consulting.pdf"></a>
                                        Download Resume
                                    </button>
                                    {/* <a href='./Cynthia Xu - Junior Analyst Programmer - JFE Consulting.pdf' download='Resume'>
                                        <button className='btn btn-primary' type='button'>Download Resume</button>
                                    </a> */}
                                    <div className="right">
                                        {/* <div className="img">
                                            <img src={require('./about.jpg')} alt="Image Test" />
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default About;