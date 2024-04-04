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
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
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
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guyub}
              isBlog={false}
              title="Nasi Goreng Guyub Rukun - Dashboard Monitoring Admin"
              description="
              The project involved creating admin dashboard to monitor daily sales transactions, manage sales capital, and analyze profits. Active verbs were integrated for improved interaction, while the user-friendly interface facilitated intuitive navigation and efficient data visualization. Real-time tracking enabled informed decision-making, and scalability was ensured for handling large datasets. Modern technologies and best practices were employed to enhance functionality and user experience."
              stack="Tech Stack :"
              tools="Laravel, Tailwind CSS , PostgresSQL"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bpkh2}
              isBlog={false}
              title="BPKH - CSMS"
              description="Collaborated with the team to design and develop features for the BPKH CSMS application. Implemented the backend system using ASP.NET MVC or ASP.NET Core to manage business logic. Managed SQL Server database, including schema design, data management, and query optimization. Assisted in integrating BPKH CSMS with other systems. Conducted testing, debugging, and maintenance for optimal performance."
              stack="Tech Stack :"
              tools=".NET Framework, Bootstrap CSS , SQL Server"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palma}
              isBlog={false}
              title="Palma Pertiwi Makmur - Company Profile"
              description="
              Developed an engaging company profile with innovative design elements to enhance user experience, effectively communicating brand identity and values. Designed for seamless navigation and accessibility, the dynamic profile utilizes multimedia elements to convey key messages effectively."
              stack="Tech Stack :"
              tools="React Js, Tailwind CSS "
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mitok}
              isBlog={false}
              title="Mitra Toko - Content Management System"
              description="
              Developed a versatile content management system (CMS) to monitor sales, manage products, and optimize application processes. Enhanced operational efficiency through intuitive tools for sales monitoring, product management, and streamlined application oversight."
              stack="Tech Stack :"
              tools="Laravel, Bootstrap CSS, Postgres SQL "
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotacompro}
              isBlog={false}
              title="IOTANESIA - Company Profile"
              description="
              Developed an engaging company profile with innovative design elements to enhance user experience, effectively communicating brand identity and values. Designed for seamless navigation and accessibility, the dynamic profile utilizes multimedia elements to convey key messages effectively."
              stack="Tech Stack :"
              tools="React Js, Tailwind CSS " // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yamaha}
              isBlog={false}
              title="Yamaha Motor Parts Manufacturing - Tracking & Approval Application"
              description="Developed, engineered, and designed a comprehensive shipment tracking and approval application, optimizing logistics management and enhancing workflow efficiency. Empowered users with intuitive tools for seamless monitoring of deliveries and expedited approval processes, enabling real-time tracking and swift actions."
              stack="Tech Stack :"
              tools="React Js, Laravel, Tailwind CSS , Postgres SQL "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
