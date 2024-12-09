import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PEWORLD1 from "../../Assets/Projects/PEWORLD1.png";
import PEWORLD2 from "../../Assets/Projects/PEWORLD2.png";
import PEWORLD3 from "../../Assets/Projects/PEWORLD3.png";
import PEWORLD4 from "../../Assets/Projects/PEWORLD4.png";
import PEWORLD5 from "../../Assets/Projects/PEWORLD5.png";
import FRECIPE1 from "../../Assets/Projects/FRECIPE1.jpg";
import BLANJA1 from "../../Assets/Projects/BLANJA1.png";
import BLANJA2 from "../../Assets/Projects/BLANJA2.png";
import BLANJA3 from "../../Assets/Projects/BLANJA3.png";
import BLANJA4 from "../../Assets/Projects/BLANJA4.png";
import SNUSANTARA1 from "../../Assets/Projects/SNUSANTARA1.png";
import SNUSANTARA2 from "../../Assets/Projects/SNUSANTARA2.png";
import SNUSANTARA3 from "../../Assets/Projects/SNUSANTARA3.png";
import SNUSANTARA4 from "../../Assets/Projects/SNUSANTARA4.png";


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
              imgPaths={[PEWORLD1,PEWORLD2,PEWORLD3,PEWORLD4,PEWORLD5]}
              isBlog={false}
              title="Hiring Apps"
              description="
              Developed a cutting-edge hiring application, meticulously crafted with Next.js and GoFiber to seamlessly integrate design elements and ensure a fluid user experience. The interface adheres to design standards, delivering both visual appeal and functional efficiency, providing users with an immersive and intuitive job-seeking platform."
              stack="Tech Stack :"
              tools="Next JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/FE-HIREJOB"
              ghLinkBackEnd="https://github.com/hasbiriza/BE-HIREJOB"
              demoLink="https://peworld-hirejob.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[FRECIPE1]}
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
              imgPaths={[BLANJA1,BLANJA2,BLANJA3,BLANJA4]}
              isBlog={false}
              title="Blanja"
              description="
              Developed an immersive food recipe application that seamlessly integrates design elements using React.js and GoFiber. Ensured a visually appealing and intuitive interface, harmonizing design standards for a delightful user experience."
              stack="Tech Stack :"
              tools="React JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/FE-Blanja"
              // ghLinkBackEnd="https://github.com/hasbiriza/BE-Blanja"
              demoLink="https://blanjaready.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[FRECIPE1]}
              isBlog={false}
              title="MyGramAPP=API"
              description="
              Developed an immersive food recipe application that seamlessly integrates design elements using React.js and GoFiber. Ensured a visually appealing and intuitive interface, harmonizing design standards for a delightful user experience."
              stack="Tech Stack :"
              tools="Golang,  PostgresSQL"
              ghLinkBackEnd="https://github.com/hasbiriza/MyGramAPP-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[SNUSANTARA1,SNUSANTARA2,SNUSANTARA3,SNUSANTARA4]}
              isBlog={false}
              title="Restoran Selera Nusantara"
              description="
              Developed an immersive food recipe application that seamlessly integrates design elements using React.js and GoFiber. Ensured a visually appealing and intuitive interface, harmonizing design standards for a delightful user experience."
              stack="Tech Stack :"
              tools="React JS, Bootstrap CSS , Html"
              ghLinkFrontEnd="https://github.com/hasbiriza/RestoranSeleraNusantara"
              demoLink="https://seleranusantara.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
