import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PEWORLD1 from "../../Assets/Projects/PEWORLD1.png";
import PEWORLD2 from "../../Assets/Projects/PEWORLD2.png";
import PEWORLD3 from "../../Assets/Projects/PEWORLD3.png";
import PEWORLD4 from "../../Assets/Projects/PEWORLD4.png";
import PEWORLD5 from "../../Assets/Projects/PEWORLD5.png";
import FRECIPE1 from "../../Assets/Projects/FRECIPE1.png";
import FRECIPE2 from "../../Assets/Projects/FRECIPE2.png";
import FRECIPE3 from "../../Assets/Projects/FRECIPE3.png";
import FRECIPE4 from "../../Assets/Projects/FRECIPE4.png";
import BLANJA1 from "../../Assets/Projects/BLANJA1.png";
import BLANJA2 from "../../Assets/Projects/BLANJA2.png";
import BLANJA3 from "../../Assets/Projects/BLANJA3.png";
import BLANJA4 from "../../Assets/Projects/BLANJA4.png";
import SNUSANTARA1 from "../../Assets/Projects/SNUSANTARA1.png";
import SNUSANTARA2 from "../../Assets/Projects/SNUSANTARA2.png";
import SNUSANTARA3 from "../../Assets/Projects/SNUSANTARA3.png";
import SNUSANTARA4 from "../../Assets/Projects/SNUSANTARA4.png";
import MYGRAM1 from "../../Assets/Projects/MYGRAM1.png";
import MYGRAM2 from "../../Assets/Projects/MYGRAM2.png";
import MYGRAM3 from "../../Assets/Projects/MYGRAM3.png";


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
             Peworld Hirejob is a recruitment platform for Industry
              4.0 that connects recruiters with certified talent,
              providing features to streamline the process of finding,
              evaluating, and hiring the right candidates for
              companies.

            Developed the full-stack of this website, leveraging
            Next.js, PostgreSQL, Golang Fiber, Cloudinary,
            Bootstrap, and GORM.
            Key features include search talent, detail talent,
            hire talent, recruiter and jobseeker register, profile
            editing."
              stack="Tech Stack :"
              tools="Next JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/FE-HIREJOB"
              ghLinkBackEnd="https://github.com/hasbiriza/BE-HIREJOB"
              demoLink="https://peworld-hirejob.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[FRECIPE1,FRECIPE2,FRECIPE3,FRECIPE4]}
              isBlog={false}
              title="Mama Recipe"
              description="
              Mama Recipe Web helps you cook delicious, simple
              meals with recipes and cooking tips from fellow
              home cooks.

              This website was developed using React.js,,
              PostgreSql, Native Golang, Bootstrap, GORM
              Our web-based platform lets users share, like,
              and comment on recipes, much like social
              media. Explore recipes, view ingredients, and
              watch step-by-step videos."
              stack="Tech Stack :"
              tools="React JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/Fe-Food-Recipe"
              ghLinkBackEnd="https://github.com/hasbiriza/Be-Food-Recipe"
              demoLink="https://mama-recipe-food.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[BLANJA1,BLANJA2,BLANJA3,BLANJA4]}
              isBlog={false}
              title="Blanja"
              description="
             The Blanja e-commerce website project is an online
              platform designed to facilitate seamless buying
              and selling transactions.

              Developed from scratch to completion, this
              website utilizes Next.js, Context API, PostgreSQL,
              Golang Fiber, Cloudinary, Tailwind CSS, Material
              UI, and GORM.
              Key features include a shopping cart, checkout
              process, product detail pages, profile editing,
              product selling, and product search
              functionalities."
              stack="Tech Stack :"
              tools="React JS, Bootstrap CSS , Gofiber (Golang Framework), PostgresSQL"
              ghLinkFrontEnd="https://github.com/hasbiriza/FE-Blanja"
              ghLinkBackEnd="https://github.com/hasbiriza/BE-Blanja"
              demoLink="https://blanjaready.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[MYGRAM1,MYGRAM2,MYGRAM3]}
              isBlog={false}
              title="MyGramAPP=API"
              description="
              MyGram is an API for managing photos and
              comments, using Gin Gonic and Gorm ORM.
              Allows account creation, photo uploads,
              commenting, and linking social media profiles
              with robust input validation.
              Utilizes JSON Web Tokens (JWT) for
              authentication and authorization, ensuring
              secure access and modification of data.
              Built with Gin Gonic for the web framework, Gorm
              for database handling, and JWT for secure
              authentication.
              Implementing a DDD approach to API
              development, utilizing Swagger to create clear,
              comprehensive, and maintainable API
              documentation"
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
             Selera Nusantara Restaurant features a sleek,
            single-page application crafted with React.js and
            React Router. It serves as an engaging company
            profile, offering menus like About Us, Contact Us, Our
            Menu, and more. The website is fully responsive
            across all devices and boasts a stunning design."
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
