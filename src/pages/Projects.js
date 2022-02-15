import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from "./components/ProjectCard";
import NumberGuesser from "../Assets/Number-Guesser.png"
import FindYourHat from "../Assets/Find-Your-Hat.png"
import ColmarAcademy from "../Assets/Colmar-Academy.png"
import Ravenous from "../Assets/Ravenous.png"
import TaskManager from "../Assets/Task-Manager.png"
import MyPortfolio from "../Assets/MyPortfolio.png"


export default function Projects() {

    const projects = [
        {
            title: "My Portfolio",
            description: "A simple portfolio website where you can see my projects.",
            skills: "JavaScript, HTML, CSS",
            imgPath: MyPortfolio,
            codeLink: "https://github.com/harry33321/harry33321.github.io",
            projectLink: "https://harry33321.github.io/"
        },
        {
            title: "Task Manager",
            description: "A simple task manager where you can add, edit, and delete tasks.",
            skills: "JavaScript, HTML, CSS",
            imgPath: TaskManager,
            codeLink: "https://github.com/harry33321/react-tasks-manager",
            projectLink: "https://harry33321.github.io/react-tasks-manager/"
        },
        {
            title: "Ravenous",
            description: "A simple restaurant website where you can find the best restaurants in your area.",
            skills: "JavaScript, HTML, CSS",
            imgPath: Ravenous,
            codeLink: "https://github.com/harry33321/Ravenous",
            projectLink: "https://harry33321.github.io/Ravenous/"
        },
        {
            title: "Colmar Academy",
            description: "A simple website for the Colmar Academy, a school in Germany.",
            skills: "JavaScript, HTML, CSS",
            imgPath: ColmarAcademy,
            codeLink: "https://github.com/harry33321/Colmar-Academy",
            projectLink: "https://harry33321.github.io/Colmar-Academy/"
        },
        {
            title: "Find Your Hat",
            description: "A simple game where you have to find the hat that is hiding in the room.",
            skills: "JavaScript, HTML, CSS",
            imgPath: FindYourHat,
            codeLink: "https://github.com/harry33321/Find-Your-Hat",
            projectLink: "https://harry33321.github.io/Find-Your-Hat/"
        },
        {
            title: "Number Guesser",
            description: "A simple number guessing game built with React.js.",
            skills: "React.js, JavaScript, HTML, CSS",
            imgPath: NumberGuesser,
            codeLink: "https://github.com/harry33321/Number-Guesser",
            projectLink: "https://harry33321.github.io/Number-Guesser/"
        },
    ]

    return (
        <Container className="projectPage">
            <h1 className="ta-c">
                My Recent <strong className="purple">Works</strong>
            </h1>
            <p className='ta-c'>
                Here are a few projects I've worked on recently.
            </p>
            <Row>
                {projects.map((project, index) => (
                    <Col md={6} xxl={4} className="projectCol" key={index}>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
