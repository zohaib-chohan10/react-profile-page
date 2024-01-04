import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileHeader from '../../Components/ProfileHeader'
import Photos from '../../Components/Photos'
import PostSomething from '../../Components/PostSomething'
import MyPost from '../../Components/MyPost'
import UserDetail from '../../Components/UserDetail'
const Home = () => {
  const pages = [
    {
      pageTitle: 'Contact Us'
    },
    {
      pageTitle: 'Terms of use'
    },
    {
      pageTitle: 'Cookies Policy'
    },
    {
      pageTitle: 'Help & Support'
    },
  ]
  const socialLinks = [
    {
      social: 'Facebook'
    },
    {
      social: 'Linkedin'
    },
    {
      social: 'Instagram'
    },
    {
      social: 'Youtube'
    },
  ]
  return (
    <div>
      <ProfileHeader />
      <Container>
        <Row className='mt-4'>
          <Col lg={4}>
            <UserDetail />
            <Photos />
          </Col>
          <Col lg={8}>
            <PostSomething />
            <MyPost />
            <Row>
              <Col lg={12}>
                <ul className="list-inline d-flex page-list border-bottom mt-4 mb-0 pb-3">
                  {pages?.map((item, index) => (
                    <li className='me-4'>
                      {item?.pageTitle}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <ul className="list-inline d-flex page-list border-bottom mt-4 mb-0 pb-3">
                  {socialLinks?.map((item, index) => (
                    <li className='me-4'>
                      {item?.social}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row className='justify-content-between align-items-center text-color mt-3 text-center text-md-start'>
              <Col lg={6}>
                <p className='mb-0'>Halal Networks © 2023. All rights reserved</p>
              </Col>
              <Col lg={6}>
                <ul className="list-inline d-flex page-list mb-0">
                  <li className='me-4'>
                    User Agreement
                  </li>
                  <li className='me-4'>
                    Privacy Pplicy
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Home
