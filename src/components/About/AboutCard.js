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
            I am also a student at Pamulang University
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
