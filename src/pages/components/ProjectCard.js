import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div>Skills: {props.skills}</div><br/>
                <Button variant="primary" href={props.codeLink} target="_blank">
                    <BiLinkExternal /> View Code
                </Button>
                <Button variant="primary" href={props.projectLink} target="_blank">
                    <BiLinkExternal /> View Project
                </Button>
            </Card.Footer>
        </Card>
    );
}