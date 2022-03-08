import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import projects from "../../utils/projects.json"



function Project() {
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {projects.map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={_.image} />
                            <Card.Body>
                                <Card.Title style="color: black;">{_.name}</Card.Title>
                                <Card.Text>
                                    {_.description}
                                </Card.Text>
                                <Card.Link href={_.GitHub}>
                                    <i class="fa-brands fa-github"></i>
                                </Card.Link>
                                <Card.Link href={_.deployedURL}>
                                    <i class="fa-solid fa-link"></i>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Project
