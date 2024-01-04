import React from 'react'
import './index.css'

const UserDetail = () => {
    return (
        <div className='card border-0 p-3 b-radius-12'>
            <h6 className='font-outfit'>About</h6>
            <p className='font-outfit text-gray-light'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <div className="profile-update d-flex">
                <div className="posts">
                    <p className='mb-1'>Posts</p>
                    <span className='text-dark'>1.3K</span>
                </div>
                <div className="following">
                    <p className='mb-1'>Following</p>
                    <span className='text-dark'>3,154</span>
                </div>
                <div className="followers">
                    <p className='mb-1'>Followers</p>
                    <span className='text-dark'>2,054</span>
                </div>
            </div>
            <ul className='list-inline info-list mt-4 mb-0'>
                <li className='mb-2'>
                    <i class="me-2 bi bi-geo-alt"></i> Yogyakarta, ID
                </li>
                <li className='mb-2'>
                    <i class="me-2 bi bi-heart-half"></i> Single
                </li>
                <li className='mb-2'>
                    <i class="me-2 bi bi-calendar2-range"></i> Joined June 2012
                </li>
                <li className='mb-2'>
                    <i class="me-2 bi bi-globe"></i> dribble.com/fawait
                </li>
                <li className='mb-2'>
                    <i class="me-2 bi bi-briefcase"></i> Working at Sebo Studio
                </li>
            </ul>
        </div>
    )
}

export default UserDetail
