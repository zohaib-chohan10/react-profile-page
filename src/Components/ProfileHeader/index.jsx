import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import userPic from "../../Assets/Images/user.png"
import headerBg from "../../Assets/Images/header-bg.png"
import "./index.css"


const ProfileHeader = () => {
    return (
        <Container className='mt-3'>
            <Row>
                <Col lg={12}>
                    <div className="card b-radius-12 border-0 pb-3 pb-lg-0">
                        <img src={headerBg} alt='userPic' className='w-100 header-bg' />
                        <Row className='px-4'>
                            <Col lg={6} md={12}>
                                <div className="d-flex align-items-center pb-4 flex-wrap text-center text-lg-start">
                                    <div className="user-profile position-relative">
                                        <img src={userPic} alt='userpic' />
                                    </div>
                                    <div className="user-name d-flex flex-column ms-4">
                                        <h2 className='profile-title font-outfit'>Ahmad Nur Fawaid</h2>
                                        <span className='text-gray'>@fawait</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={12} className='d-flex justify-content-end align-items-center'>
                                <button type="button" class="btn edit-btn text-white font-outfit fw-normal mx-auto mx-lg-0">
                                    <i class="bi bi-pencil me-1"></i> Edit Profile
                                </button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileHeader
