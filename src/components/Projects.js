import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import NumberGuesser from "../images/Number-Guesser.png"
import FindYourHat from "../images/Find-Your-Hat.png"
import ColmarAcademy from "../images/Colmar-Academy.png"
import Ravenous from "../images/Ravenous.png"
import TaskManager from "../images/Task-Manager.png"
import MyPortfolio from "../images/MyPortfolio.png"


export default function Projects() {
    return (
        <div>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Works</strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={6} xxl={4} className="project-card">
                            <ProjectCard
                                imgPath={MyPortfolio}
                                title="My Portfolio"
                                description=""
                                skills="React"
                                codeLink="https://github.com/harry33321/harry33321.github.io"
                                projectLink="https://harry33321.github.io/"
                            />
                        </Col>

                        <Col md={6} xxl={4} className="project-card">
                            <ProjectCard
                                imgPath={TaskManager}
                                title="Task Manager"
                                description=""
                                skills="React, Firebase"
                                codeLink="https://github.com/harry33321/react-tasks-manager"
                                projectLink="https://harry33321.github.io/react-tasks-manager"
                            />
                        </Col>

                        <Col md={6} xxl={4} className="project-card">
                            <ProjectCard
                                imgPath={Ravenous}
                                title="Ravenous"
                                description=""
                                skills="React, API"
                                codeLink="https://github.com/harry33321/Ravenous"
                                projectLink="https://harry33321.github.io/Ravenous"
                            />
                        </Col>

                        <Col md={6} xxl={4} className="project-card">
                            <ProjectCard
                                imgPath={ColmarAcademy}
                                title="Responsive Page"
                                description=""
                                skills="HTML, CSS, Bootstrap"
                                codeLink="https://github.com/harry33321/Colmar-Academy"
                                projectLink="https://harry33321.github.io/Colmar-Academy"
                            />
                        </Col>

                        <Col md={6} xxl={4} className="project-card">
                            <ProjectCard
                                imgPath={FindYourHat}
                                title="Find Your Hat"
                                description=""
                                skills="JavaScript"
                                codeLink="https://github.com/harry33321/Find-Your-Hat"
                                projectLink="https://github.com/harry33321/Find-Your-Hat"
                            />
                        </Col>

                        <Col md={6} xxl={4} className="project-card">
                            <ProjectCard
                                imgPath={NumberGuesser}
                                title="Number Guesser"
                                description=""
                                skills="JavaScript"
                                codeLink="https://github.com/harry33321/Number-Guesser"
                                projectLink="https://harry33321.github.io/Number-Guesser"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
