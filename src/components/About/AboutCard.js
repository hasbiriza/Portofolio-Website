import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Muhammad Hasbiriza </span>
            from <span className="purple"> Bogor, Indonesia.</span>
            <br />
            I am graduated from IPB University 
            <br />
            <br />
            A full-stack web developer with over 1.5 years of experience, combining formal bootcamp training and hands-on professional expertise in both frontend and backend development. Proficient in building dynamic, responsive, and interactive web applications using HTML, CSS, JavaScript, React.js, and Next.js, along with backend technologies like Node.js, Golang, and Shopify Liquid. Experienced in developing and customizing high-performance e-commerce solutions on Shopify, optimizing site functionality, and integrating third-party APIs to enhance user experience and business operations. Knowledgeable in server-side logic and deployment processes, with an understanding of security, scalability, and performance optimization, continuously developing hands-on expertise. A creative problem-solver with a growth mindset, I am driven to deliver high-quality web solutions that are both user-centered and business-oriented, continually learning and staying ahead of emerging technologies to create innovative, adaptable solutions that meet the evolving needs of clients and users.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Music Instrument
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating All Food except Vegetable
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"4 Sehat , 5 Milyar" </p>
          <footer className="blockquote-footer">Muhammad Hasbiriza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
