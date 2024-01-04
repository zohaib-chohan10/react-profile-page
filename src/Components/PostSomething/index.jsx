import React from 'react'
import profileIcon from '../../Assets/Images/profile.png'
import './index.css'

const PostSomething = () => {
    return (
        <div className='card p-3 border-color b-radius-12'>
            <div className="d-flex align-items-center">
                <div className="post-by-icon me-2">
                    <img src={profileIcon} alt='profileIcon' className='w-100' />
                </div>
                <textarea className='w-100 border-0' rows={1} placeholder='Post something...'></textarea>
                <div className="post-by-icon">
                    <i class="bi bi-image"></i>
                </div>
            </div>

        </div>
    )
}

export default PostSomething
