import React from 'react'
import ProjectsCard from './ProjectsCard';

import 'animate.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";


//ProjectCard Pics
import todoListProjectPic from "../../assets/todolist-mini-project.png"
// import chatApp from "../../assets/chat app.png"
// import pokemonApiProjectPic from "../../assets/pokemon-api.png"
import gamingPageProjectPic from "../../assets/gaming-page.png"


import clock from '../../assets/digitalClock.png'


const ProjectData = () => {
  

    let card2 = [
        {
            projectTitle: 'Digital Clock',
            projectSummary: 'I Created Digital Clock using HTML, Css, Javascript',
            image: clock,
            github: 'https://github.com/Ranjith677/digitalclock',
            netify: "https://benevolent-pika-3bb4f2.netlify.app/",
        },
        {
            projectTitle: 'Todo List',
            projectSummary: 'I created Todo List With Javascript Using Local Storage',
            image: todoListProjectPic,
            github: 'https://github.com/Ranjith677/to-do-list',
            netify: 'https://friendly-alpaca-42eb3b.netlify.app/',
        },
        {
            projectTitle: 'Gaming Page',
            projectSummary: 'Simple Gaming site uing HTML and Css',
            image: gamingPageProjectPic,
            github: 'https://github.com/Ranjith677/gaming-page',
            netify: 'https://dancing-pudding-49348c.netlify.app/',
        },
    ]

    return (
        <section className="project portfoilo" id="projects">
            <h5 className="projects-title ">Projects</h5>
            <h2 className='heading'>Some of my recent <span>Works</span></h2>


            <Container>
                <Row>
                    <Col size={5}>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Soon</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Soon</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                             
                                <Tab.Pane eventKey="second">
                                    <div className="portfolio-container">
                                        {card2.map((carddata, id) => {

                                            return <ProjectsCard data={carddata} key={id} />

                                        })}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h1 style={{ textAlign: "center", padding: "30px" }}>Coming Soon✨...</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>


        </section >
    )
}

export default ProjectData