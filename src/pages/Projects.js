import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from "./components/ProjectCard";
import NumberGuesser from "../Assets/Number-Guesser.png";
import FindYourHat from "../Assets/Find-Your-Hat.png";
import ColmarAcademy from "../Assets/Colmar-Academy.png";
import Ravenous from "../Assets/Ravenous.png";
import Jammming from "../Assets/Jammming.png";
import TaskManager from "../Assets/Task-Manager.png";
import MyPortfolio from "../Assets/MyPortfolio.png";
import { Bounce, Fade, Flip } from 'react-reveal';


export default function Projects() {

    const projects = [
        // {
        //     title: "My Portfolio",
        //     description: "A portfolio website where you can see my projects.",
        //     skills: "React.js",
        //     imgPath: MyPortfolio,
        //     codeLink: "https://github.com/harry33321/harry33321.github.io",
        //     projectLink: "https://harry33321.github.io/"
        // },
        {
            title: "Task Manager",
            description: "A web app where user can login to access your tasks, add new tasks, edit, and delete tasks. It also has a calendar that you can see your tasks by date.",
            skills: "React.js, Firebase",
            imgPath: TaskManager,
            codeLink: "https://github.com/harry33321/react-tasks-manager",
            projectLink: "https://harry33321.github.io/react-tasks-manager/"
        },
        {
            title: "Jammming",
            description: "A song finder where user can search the Spotify library, create a custom playlist, then save it to their Spotify account.",
            skills: "React.js, API",
            imgPath: Jammming,
            codeLink: "https://github.com/harry33321/Jammming",
            projectLink: "https://harry33321.github.io/Jammming/"
        },
        {
            title: "Ravenous",
            description: "A simple restaurant website where user can find the best restaurants in your area.",
            skills: "React.js, API",
            imgPath: Ravenous,
            codeLink: "https://github.com/harry33321/Ravenous",
            projectLink: "https://harry33321.github.io/Ravenous/"
        },
        {
            title: "Responsive website",
            description: "A responsive website which is look good on all devices!",
            skills: "HTML, CSS, Bootstrap",
            imgPath: ColmarAcademy,
            codeLink: "https://github.com/harry33321/Colmar-Academy",
            projectLink: "https://harry33321.github.io/Colmar-Academy/"
        },
        {
            title: "Find Your Hat",
            description: "A simple game where you have to find the hat that is hiding in the room.",
            skills: "JavaScript",
            imgPath: FindYourHat,
            codeLink: "https://github.com/harry33321/Find-Your-Hat",
            projectLink: "https://github.com/harry33321/Find-Your-Hat"
        },
        {
            title: "Number Guesser",
            description: "A simple number guessing game that the system picks a secret target number randomly, then the player and computer each guess a number, and the party closest to the target number wins.",
            skills: "JavaScript, HTML, CSS",
            imgPath: NumberGuesser,
            codeLink: "https://github.com/harry33321/Number-Guesser",
            projectLink: "https://harry33321.github.io/Number-Guesser/"
        },
    ]

    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 0;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);


    return (
        <Container className="projectPage">
            <h1 className="ta-c">
                My Recent <strong className="purple">Works</strong>
            </h1>
            <p className='ta-c'>
                Here are a few projects I've worked on recently.
            </p>
            <Bounce bottom cascade>
                <Row>
                    {projects.map((project, index) => (
                        <Col md={6} xxl={4} className="projectCol" key={index}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            </Bounce>
        </Container>
    )
}