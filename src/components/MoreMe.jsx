import React from 'react'

const MoreMe = () => {
    return (
        <div>
            <h3>Academic Record</h3>
            <div className='d-flex'>
                <div className='col'>
                    {/* Degree  */}
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">B.E ( Information Technology ) </h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Mumbai University, 2020-24</h6>
                            <h6 class="card-subtitle mb-2 text-muted"> CGPA- 9.59</h6>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    {/* HSC */}
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">HSC </h5>
                            <h6 class="card-subtitle mb-2 text-muted"> CBSE, 2020</h6>
                            <h6 class="card-subtitle mb-2 text-muted"> Percentage - 84%</h6>
                        </div>
                    </div>
                </div>
                <div className='col'>
                      {/* SSC */}
                      <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">SSC </h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Maharshtra State Board, 2018</h6>
                            <h6 class="card-subtitle mb-2 text-muted"> Percentage - 96%</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MoreMe