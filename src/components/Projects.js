import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Thingamabobs.png";
import projImg2 from "../assets/img/image.png";
import projImg3 from "../assets/img/MoMart.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ThingamaBobs",
      description: "Ecommerence website",
      imgUrl: projImg1,
    },
    {
      title: "The Krusty Krab",
      description: "Store website",
      imgUrl: projImg2,
    },
    {
      title: "Mo Mart",
      description: "Enhanced version of Thingamabobs",
      imgUrl: projImg3,
    },



  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> Here you will find a collection of some of my recent web development projects. Each project was built with a focus on creating a seamless user experience while maintaining a clean and modern design. I pride myself on my attention to detail and my ability to solve complex problems. I believe that every project has its unique challenges, and I am committed to finding the best solutions for each one. Whether it's building an e-commerce website or developing a custom application, I am always eager to take on new and exciting projects. Thank you for taking the time to view my work, and I hope to have the opportunity to work with you soon!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
