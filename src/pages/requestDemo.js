import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RequestDemo() {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center bg-light"
            style={{ minHeight: "100vh" }} // full height
        >
            <Container>
                <Row className="align-items-center">
                    {/* Left Section */}
                    <Col md={6} className="mb-4">
                        <h2 className="text-primary">💬 Ready to Boost Your Engagement?</h2>
                        <p>
                            Fill out the form to schedule your personalized demo and explore how
                            our platform can transform your customer interactions.
                        </p>

                        <h3 className="text-primary">Why Choose Us?</h3>
                        <p>⚡ Instant Integration with Your Existing Tools</p>
                        <p>📈 Real-time Analytics & Engagement Insights</p>
                        <p>👥 Boost Customer Retention with Smart Targeting</p>
                        <p>🎧 Dedicated Success Manager for Every Client</p>

                        <Button variant="secondary" onClick={() => navigate("/")}>
                            ⬅ Back To Home
                        </Button>
                    </Col>

                    {/* Right Section */}
                    <Col md={6}>
                        {!submitted ? (
                            <Card className="p-4 shadow-lg bg-dark text-white">
                                <h3>📝 Request a Demo</h3>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Control type="text" placeholder="First Name*" required />
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Last Name*" required />
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" placeholder="Email*" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Company Name" />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Control type="text" placeholder="Phone Number" />
                                        </Col>
                                        <Col>
                                            <Form.Select>
                                                <option>Select Country</option>
                                                <option>India</option>
                                                <option>USA</option>
                                                <option>UK</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            label={
                                                <>
                                                    I agree to the <a href="#">Terms</a> and{" "}
                                                    <a href="#">Privacy Policy</a>
                                                </>
                                            }
                                        />
                                    </Form.Group>

                                    <Button
                                        type="submit"
                                        className="w-100 fw-bold"
                                        style={{
                                            background: "linear-gradient(90deg, #007bff, #9c27b0)",
                                            border: "none",
                                        }}
                                    >
                                        🚀 Submit Request
                                    </Button>
                                </Form>
                            </Card>
                        ) : (
                            <Card className="p-4 bg-light shadow">
                                <Alert variant="success" className="text-center">
                                    <h4>✅ Request Sent Successfully</h4>
                                    <p>Thank you for requesting a demo. We will contact you soon.</p>
                                </Alert>
                                <div className="text-center">
                                    <Button variant="primary" onClick={() => navigate("/")} className="fw-bold">
                                        Back To Home
                                    </Button>
                                </div>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RequestDemo;
