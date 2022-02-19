import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard({ project }) {
    return (
        <Card className="projectCard">
            <Card.Img src={project.imgPath} alt="cardImg" />
            <Card.Body>
                <Card.Title className="ta-c">{project.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {project.description}
                </Card.Text>
                <br />
                <small>Skills: {project.skills}</small>
            </Card.Body>
            <Card.Footer className="ta-c">
                {/* <Button variant="primary" href={project.codeLink} target="_blank">
                    <BiLinkExternal /> View Code
                </Button> */}
                <Button variant="primary" href={project.projectLink} target="_blank">
                    <BiLinkExternal /> View Project
                </Button>
            </Card.Footer>
        </Card>
    );
}