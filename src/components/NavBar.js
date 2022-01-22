import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc"
import { CgFileDocument } from "react-icons/cg";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";


export default function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const handleExpanded = () => {
        setExpanded(false);
    }

    const [navColor, setNavColor] = useState(false);
    const handleScroll = () => {
        if (window.scrollY >= 20) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }
    window.addEventListener("scroll", handleScroll);


    return (
        <Navbar
            expanded={expanded}
            fixed="top"
            expand="md"
            className={navColor ? "sticky" : "navbar"}
        >
            <Navbar.Brand href="/">
                <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => setExpanded(!expanded)}
            >
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" defaultActiveKey="#home">
                    <Nav.Link
                        as={Link}
                        to="/"
                        onClick={handleExpanded}
                    >
                        <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                    </Nav.Link>

                    <Nav.Link
                        as={Link}
                        to="/about"
                        onClick={handleExpanded}
                    >
                        <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                    </Nav.Link>

                    <Nav.Link
                        as={Link}
                        to="/project"
                        onClick={handleExpanded}
                    >
                        <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                        Projects
                    </Nav.Link>

                    <Nav.Link
                        as={Link}
                        to="/resume"
                        onClick={handleExpanded}
                    >
                        <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                    </Nav.Link>

                    <Nav.Link
                        href="https://github.com/harry33321/"
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleExpanded}
                    >
                        <VscGithub style={{ marginBottom: "2px" }} />{" "}
                        GitHub
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}