import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const TechSkills = () => {
    return (
        <>
            <div className='bg-secondary'>
                <h1>Technical Skills</h1>
                <div >
                    <Carousel>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center'>
                                <div className='col text-center border border-light'>
                                    <h3>Language</h3>
                                    <div className='d-flex'>
                                        <div className='col'>
                                            <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png' class="img-fluid" alt="..." />
                                        </div>
                                        <div className='col'>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_D_n0YE9r71rbZdLg67lSiHyyDZ6iENeYDQ&s' class="img-fluid" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center'>
                                <div className='col text-center'>
                                    <div>
                                        <h3>Front-End Web Tech.</h3>
                                        <div className='d-flex'>
                                            <div className='col'>
                                                <img src='https://tse1.mm.bing.net/th?id=OIP.Ic719f-PCoMe0WkukecVSgAAAA&pid=Api&P=0&h=180https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png' class="img-fluid" alt='' />
                                            </div>
                                            <div className='col'>
                                                <img src='https://tse2.mm.bing.net/th?id=OIP.mUrucUZG_T1rIvYYi1mt9wHaGI&pid=Api&P=0&h=180' class="img-fluid" alt='' />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center'>
                                <div className='col text-center'>
                                    <div>
                                        <h3>Back-End Web Tech.</h3>
                                        <div className='d-flex'>
                                            <div className='col'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s' class="img-fluid" alt='' />
                                            </div>
                                            <div className='col'>
                                                <img src='https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png' class="img-fluid" alt='' />

                                            </div>
                                            <div className='col'>
                                                <img src='https://tse1.mm.bing.net/th?id=OIP.TPhsX2qJo5qcsy2I3An6qAHaFj&pid=Api&P=0&h=180' class="img-fluid" alt='' />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center'>
                                <div className='col text-center'>

                                    <div>
                                        <h3>Tools </h3>
                                        <div className='d-flex'>
                                            <div className='col'>
                                                <img src='https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Simbolo.png' class="img-fluid" alt='' />
                                            </div>
                                            <div className='col'>
                                                <img src='https://tse1.mm.bing.net/th?id=OIP.fVbgHQU3ZeoJErXovw5ghwAAAA&pid=Api&P=0&h=180' class="img-fluid" alt='' />

                                            </div>
                                            <div className='col'>
                                                <img src='https://tse2.mm.bing.net/th?id=OIP.v9bLQE5KVa6L7ge7ndGkGwHaFj&pid=Api&P=0&h=180' class="img-fluid" alt='' />

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default TechSkills