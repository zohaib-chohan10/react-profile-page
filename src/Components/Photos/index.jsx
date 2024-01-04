import React from 'react'
import photo1 from '../../Assets/Images/p1.png'
import photo2 from '../../Assets/Images/p2.png'
import photo3 from '../../Assets/Images/p3.png'
import photo4 from '../../Assets/Images/p4.png'
import './index.css'
import { Link } from 'react-router-dom'

const Photos = () => {

    const data = [
        {
            image: photo1
        },
        {
            image: photo2
        },
        {
            image: photo3
        },
        {
            image: photo4
        },
    ]
    return (
        <div className='card border-0 p-3  b-radius-12 mt-4'>
            <div className="d-flex justify-content-between font-outfit">
                <h6 className=''>Photos</h6>
                <Link to='/' className='text-decoration-none'>
                    <h6 className='view-all'>  View All  </h6>
                </Link>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
                {data?.map((item, index) => (
                    <div className="photo-box mb-2" key={`image-${index}`}>
                        <img src={item?.image} alt='photo' className='w-100' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Photos
