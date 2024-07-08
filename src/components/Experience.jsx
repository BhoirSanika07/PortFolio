import React from 'react'
import '../Exp.css'
const Experience = () => {
    return (
        <div className='border border-secondary expbg'>
            <h3>Work Experience</h3>
            <div class="container">
                <div class="row p-2">
                    <div class="col align-self-start border border-secondary">
                        <h4>Web Developer </h4>
                        <h6>Nora Group </h6>
                        <h7>May 2024-Present</h7>
                    </div>
                    <div class="col align-self-center border border-secondary">
                        <h4>Web Developer Intern</h4>
                        <h6>Teachnook Pvt Ltd </h6>
                        <h7>July 2023- September 2023</h7>
                    </div>
                    <div class="col align-self-end border border-secondary">
                        <h4>Front End Web Developer Intern</h4>
                        <h6>EduFabrica Pvt Ltd </h6>
                        <h7>July 2022-August 20222</h7>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience