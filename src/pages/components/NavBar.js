import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Assets/logo.svg";
import cv from "../../Assets/Harry's Resume.pdf";
import { VscGithub } from "react-icons/vsc"
import { CgFileDocument } from "react-icons/cg";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    // AiOutlineUser,
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
            className={navColor ? "navbarSticky" : "navbar"}
        >
            <Container>
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
                    <Nav defaultActiveKey="#home">
                        <Nav.Link as={Link} to="/" onClick={handleExpanded}>
                            <AiOutlineHome /> Home
                        </Nav.Link>

                        {/* <Nav.Link as={Link} to="/about" onClick={handleExpanded}>
                        <AiOutlineUser /> About
                    </Nav.Link> */}

                        <Nav.Link as={Link} to="/projects" onClick={handleExpanded}>
                            <AiOutlineFundProjectionScreen /> Projects
                        </Nav.Link>

                        <Nav.Link /* as={Link} to="/resume" */ href={cv} target="_blank" onClick={handleExpanded}>
                            <CgFileDocument /> Resume
                        </Nav.Link>

                        <Nav.Link href="https://github.com/harry33321/" target="_blank" rel="noreferrer" onClick={handleExpanded}>
                            <VscGithub /> GitHub
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}