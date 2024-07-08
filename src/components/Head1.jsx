import React from 'react'
import '../Head1.css';
import ContactIcons from './ContactIcons';
const Head1 = () => {
  return (
    <>
    <div className='d-flex headBackground text-center '>
        <div className='col text mt-5'>
            {/* mine info text */}
            <h5>
                Hi, Myself
            </h5>
            <h3>
                Sanika Bhoir
            </h3>
            <h4>
                I am a Software Engineer
            </h4>
            <ContactIcons/>
        </div>
        <div className='col mt-5'>
            {/* add images */}
            <div className='p-4'>
            <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SxIlxQqazjgs9n0gb/videoblocks-side-view-of-african-american-female-engineer-working-on-computer-in-electronics-laboratory-doing-development-of-software-and-hardware-she-wearing-a-lab-coat_byxuqrxsfr_thumbnail-1080_01.png"   className='Head1Img' alt="..."/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Head1