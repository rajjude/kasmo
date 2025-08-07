import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import heroImage from '../assets/kasmodcp.jpeg';
import { useState } from 'react';

function Hero() {
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const features = [
        {
            title: "Scalable Architecture",
            description: "Built for enterprise-level growth and performance.",
        },
        {
            title: "Dynamic Configuration",
            description: "Load flexible settings from configuration files.",
        },
        {
            title: "Snowflake Integration",
            description: "Push data seamlessly with error handling.",
        },
        {
            title: "Multi-Source Support",
            description: "Integrate data from CRMs, databases, and flat files.",
        },
        {
            title: "Real-Time Insights",
            description: "Visualize customer metrics in real time.",
        },
        {
            title: "Secure Authentication",
            description: "Manage access with role-based permissions.",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 < features.length ? prevIndex + 1 : 0
        );
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentIndex(0);
    };

    return (
        <div
            style={{
                background: 'linear-gradient(to bottom, #009dff, #00c6ff)',
                padding: '100px 0',
                minHeight: '80vh',
            }}
        >
            <Container>
                <Row className="align-items-center">
                    {/* Text Column */}
                    <Col md={6} className="text-center text-md-start text-white">
                        <h1 className="fw-bold display-4 mb-4">
                            Unlock the Power of Customer Data
                        </h1>
                        <p className="fs-5 mb-4">
                            Our CDP connects your CRM, databases, and cloud platforms in one intelligent dashboard.
                        </p>
                        <Button variant="light" size="lg" className="fw-bold px-4 py-2" onClick={() => setShowModal(true)}>
                            Explore Features
                        </Button>
                        <Modal show={showModal} onHide={handleClose} centered >
                            <Modal.Header closeButton className="border-0">
                                <Modal.Title className="w-100 fw-bold text-center fs-4">Key Features</Modal.Title>
                            </Modal.Header>

                            <Modal.Body className="border-0 text-center">
                                <div className="fw-bold fs-5 text-primary">{features[currentIndex].title}</div>
                                <div className="text-muted mt-2">{features[currentIndex].description}</div>
                            </Modal.Body>

                            <Modal.Footer className="border-0 justify-content-center">
                                <Button variant="primary" onClick={handleNext}>
                                    Next
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>

                    {/* Image Column */}
                    <Col md={6} className="text-center mt-5 mt-md-0">
                        <img
                            src={heroImage}
                            alt="CDP Diagram"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: '400px' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
