import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#111', color: '#fff', padding: '60px 0 20px' }}>
            <Container>
                <Row className="mb-5">
                    {/* KASMO */}
                    <Col md={4}>
                        <h2 className="fw-bold" style={{ color: '#3d78d8' }}>KASMO</h2>
                        <p>
                            Empowering customer intelligence with secure and scalable data sharing solutions.
                        </p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={4}>
                        <h5 className="fw-bold text-info">QUICK LINKS</h5>
                        <ul className="list-unstyled mt-3">
                            <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Config</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Data Source</a></li>
                            <li><a href="#" className="text-white text-decoration-none">User Experience</a></li>
                        </ul>
                    </Col>

                    {/* Contact */}
                    <Col md={4}>
                        <h5 className="fw-bold text-info">CONTACT</h5>
                        <ul className="list-unstyled mt-3">
                            <li className="mb-2"><FaMapMarkerAlt className="me-2" />Hyderabad, India</li>
                            <li className="mb-2"><FaEnvelope className="me-2" />support@kasmocdp.com</li>
                            <li className="mb-2"><FaPhoneAlt className="me-2" />9876543210</li>
                            <li><FaGlobe className="me-2" />www.kasmodigital.com</li>
                        </ul>
                    </Col>
                </Row>

                {/* Bottom Row */}
                <Row className="justify-content-between align-items-center">
                    <Col md={4}>
                        <Button variant="primary" className="fw-semibold">Request Demo</Button>
                    </Col>
                    <Col md={4} className="text-md-end text-center">
                        <h6 className="fw-bold text-info">Follow Us</h6>
                        <div className="d-flex justify-content-md-end justify-content-center gap-3 mt-2">
                            <a href="#" className="text-white"><FaFacebookF /></a>
                            <a href="#" className="text-white"><FaTwitter /></a>
                            <a href="#" className="text-white"><FaLinkedinIn /></a>
                            <a href="#" className="text-white"><FaYoutube /></a>
                        </div>
                    </Col>
                </Row>

                <hr className="my-4 border-light" />

                <p className="text-center text-muted mb-0">&copy; 2025 Kasmo CDP. All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
