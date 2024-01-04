import React from 'react'
import profilePic from '../../Assets/Images/profile.png'
import postPic1 from '../../Assets/Images/post-1.png'
import postPic2 from '../../Assets/Images/post-2.png'
import postPic3 from '../../Assets/Images/post-3.png'
import './index.css'


const MyPost = () => {

    const data = [
        {
            description: "Peace On Earth A Wonderful Wish But No Way",
        },
        {
            description: "One of the perks of working in an international company is sharing knowledge with your colleagues. ",
            image1: postPic1,
            image2: postPic2,
            image3: postPic3,
        },
    ];

    return (
        <>
            {data?.map((item, index) => (
                <div className='card border-0 b-radius-12 mt-3' key={`post-item-${index}`}>
                    <div className="p-3">
                        <div className="d-flex align-items-start justify-content-between">
                            <div className="post-profile-img d-flex">
                                <div className="post-img">
                                    <img src={profilePic} alt='profilePic' className='w-100' />
                                </div>
                                <div className="post-profile-title ms-3">
                                    <h6 className='mb-0 font-outfit'>Ahmad Nur Fawaid</h6>
                                    <span className='upload-detail'>12 April at 09.28 PM</span>
                                </div>
                            </div>
                            <div className="dots">
                                <i class="bi bi-three-dots"></i>
                            </div>
                        </div>
                        <div className="post-description py-4 font-outfit">
                            <p className='mb-0'>{item?.description}</p>
                            {item?.image1 && (
                                <div className="d-flex justify-content-between mt-4">
                                    <div className="vertical-img-box">
                                        <img src={item?.image3} className='w-100' />
                                    </div>
                                    <div className="horizontal-img-box d-flex flex-column justify-content-between">
                                        <div className="">
                                            <img src={item?.image1} className='w-100' />
                                        </div>
                                        <div className="">
                                            <img src={item?.image2} className='w-100' />
                                        </div>
                                    </div>

                                </div>
                            )

                            }

                        </div>
                        <div className="text-color font-outfit border-top pt-3 fs-12">
                            <div className="d-flex justify-content-between px-3">
                                <div className="comment-box d-flex align-items-center">
                                    <i class="bi bi-chat-left me-2 fw-bold"></i>
                                    <p className='mb-0'>7 Comments</p>
                                </div>
                                <div className="like-box d-flex">
                                    <i class="bi bi-heart me-2"></i>
                                    <p className='mb-0'>12 Likes</p>
                                </div>
                                <div className="share-box d-flex">
                                    <i class="bi bi-share me-2"></i>
                                    <p className='mb-0'>0 Share</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-top p-3 d-flex align-items-center">
                        <div className="post-img">
                            <img src={profilePic} alt='profilePic' className='w-100' />
                        </div>
                        <div className="position-relative comment-input w-100">
                            <input type="text" class="form-control ms-2 wyc border-0 text-color" placeholder="Write your comment "></input>
                            <i class="bi bi-paperclip"></i>
                            <i class="bi bi-emoji-smile"></i>
                            <i class="bi bi-image"></i>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MyPost
