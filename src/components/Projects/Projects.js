import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bpkh2 from "../../Assets/Projects/bpkh2.jpg";
import guyub from "../../Assets/Projects/guyub.jpg";
import mitok from "../../Assets/Projects/mitok.jpg";
import foodrecipe from "../../Assets/Projects/foodrecipe.jpg";
import iotacompro from "../../Assets/Projects/iotacompro.jpg";
import hiring from "../../Assets/Projects/hiring.jpg";
import palma from "../../Assets/Projects/palma.jpg";
import yamaha from "../../Assets/Projects/yamaha.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hiring}
              isBlog={false}
              title="Hiring Apps"
              description="
              Developed a cutting-edge hiring application, meticulously crafted with Next.js and GoFiber to seamlessly integrate design elements and ensure a fluid user experience. The interface adheres to design standards, delivering both visual appeal and functional efficiency, providing users with an immersive and intuitive job-seeking platform."
              stack="Tech Stack :"
              tools="Next JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/FE-HIREJOB"
              ghLinkBackEnd="https://github.com/hasbiriza/BE-HIREJOB"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipe}
              isBlog={false}
              title="Mama Recipe"
              description="
              Developed an immersive food recipe application that seamlessly integrates design elements using React.js and GoFiber. Ensured a visually appealing and intuitive interface, harmonizing design standards for a delightful user experience."
              stack="Tech Stack :"
              tools="React JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/soumyajit4419/Bits-0f-C0de"
              ghLinkBackEnd="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipe}
              isBlog={false}
              title="Blanja"
              description="
              Developed an immersive food recipe application that seamlessly integrates design elements using React.js and GoFiber. Ensured a visually appealing and intuitive interface, harmonizing design standards for a delightful user experience."
              stack="Tech Stack :"
              tools="React JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/FE-Blanja"
              // ghLinkBackEnd="https://github.com/hasbiriza/BE-Blanja"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipe}
              isBlog={false}
              title="MyGramAPP=API"
              description="
              Developed an immersive food recipe application that seamlessly integrates design elements using React.js and GoFiber. Ensured a visually appealing and intuitive interface, harmonizing design standards for a delightful user experience."
              stack="Tech Stack :"
              tools="Golang,  PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/MyGramAPP-API"
              // ghLinkBackEnd="https://github.com/hasbiriza/BE-Blanja"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipe}
              isBlog={false}
              title="Restoran Selera Nusantara"
              description="
              Developed an immersive food recipe application that seamlessly integrates design elements using React.js and GoFiber. Ensured a visually appealing and intuitive interface, harmonizing design standards for a delightful user experience."
              stack="Tech Stack :"
              tools="React JS, Bootstrap CSS , Html"
              ghLinkFrontEnd="https://github.com/hasbiriza/RestoranSeleraNusantara"
              // ghLinkBackEnd="https://github.com/hasbiriza/BE-Blanja"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          


          

         

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
