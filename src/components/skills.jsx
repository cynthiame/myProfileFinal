import React from 'react';

const skills = () => {
    // const Progress = ({title}) => {
    //     return (
    //         <div className="progress">
    //             <div className="progress-done" style={{opacity:1 }}>
    //                 <h4>{title}</h4>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <>
            <section className='skill'>
                <div className="container">
                    <div className="heading">
                        <h1>WHY CHOOSE ME?</h1>
                        <h3>Some Of My Skills</h3>
                    </div>
                    <div className="full-content">
                        <div className="content flex">
                            {/* <Progress title='HTML' /> */}
                            <h4>Frontend Development</h4>
                            <h4>HTML</h4>
                            <h4>CSS</h4>
                            {/* <button className="btn btn-primary">Hire Me</button> */}
                        </div>
                        <div className="content1 flex">
                            <h4>JavaScript</h4>
                            <h4>React.Js</h4>
                            <h4>React Hooks</h4>
                        </div>
                        <div className="content2 flex">
                            <h4>MongoDB</h4>
                            <h4>Object-Oriented-Programming</h4>
                            <h4>MySQL</h4>
                        </div>
                        <button className="btn btn-primary">More About Me</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default skills