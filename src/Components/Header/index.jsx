import React from 'react'
import { Container, Row, Col, InputGroup, Form, Dropdown } from 'react-bootstrap'
import logo from '../../Assets/Images/logo.png'
import notify from '../../Assets/Images/bell.svg'
import message from '../../Assets/Images/message.svg'
import add from '../../Assets/Images/add.svg'
import person from '../../Assets/Images/profile.png'
import map from '../../Assets/Images/map.svg'
import "../../Assets/Css/Themes/_default.css"
import "./index.css"

const Header = () => {

    const options = [
        { id: 1, label: 'Action' },
        { id: 2, label: 'Another action' },
        { id: 3, label: 'Something else' },
    ];

    return (
        <Container fluid className='bg-white'>
            <div className='custom-container'>
                <Row className='justify-content-between'>
                    <Col md={12} lg={3} className='text-center text-lg-start mb-3 mb-lg-0'>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col lg={3} className='d-none d-lg-block'>
                        <div class="input-group mb-3 rounded-pill border search-bg">
                            <span className="input-group-text bg-transparent border-0 " id="basic-addon1">
                                <i class="bi bi-search text-color"></i>
                            </span>
                            <input type="text" className="form-control border-0 search-bg" placeholder="Search" aria-label="Search"/>
                            <Dropdown >
                                <Dropdown.Toggle variant="white" className='bg-white text-gray rounded-pill' id="dropdown-basic">
                                    <img src={map} /> Canada
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {options.map(option => (
                                        <Dropdown.Item key={option.id} href="#">
                                            {option.label}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col lg={4} xl={3} md={6} className='py-2 py-lg-0 mx-auto mx-lg-0'>
                        <div className="d-flex justify-content-between">
                            <Dropdown >
                                <Dropdown.Toggle variant="white" className='border text-gray' id="dropdown-basic">
                                    Explore
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {options.map(option => (
                                        <Dropdown.Item key={option.id} href="#">
                                            {option.label}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="notify round-bg rounded-circle p-3">
                                <img src={notify} alt='notify' />
                            </div>
                            <div className="message round-bg rounded-circle">
                                <img src={message} alt='message' />
                            </div>
                            <div className="add round-bg rounded-circle">
                                <img src={add} alt='add' />
                            </div>
                            <div className="profile round-bg rounded-circle">
                                <img src={person} alt='person' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Header
