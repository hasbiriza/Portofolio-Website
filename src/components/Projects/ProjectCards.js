import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectCards(props) {
  const { ghLinkFrontEnd, ghLinkBackEnd, demoLink, isBlog } = props;

  const hasOneGitHubLink = (ghLinkFrontEnd && !ghLinkBackEnd) || (!ghLinkFrontEnd && ghLinkBackEnd);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ fontWeight: "bold", fontSize: "18px" }}>
          {props.stack}
        </Card.Text>
        <Card.Text style={{ fontStyle: "italic" }}>{props.tools}</Card.Text>
        
        <Row className="mb-3">
          {ghLinkFrontEnd && !ghLinkBackEnd && (
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="primary" href={ghLinkFrontEnd} target="_blank">
                <BsGithub /> &nbsp;
                GitHub
              </Button>
            </Col>
          )}
          {ghLinkBackEnd && !ghLinkFrontEnd && (
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="primary" href={ghLinkBackEnd} target="_blank">
                <BsGithub /> &nbsp;
                GitHub
              </Button>
            </Col>
          )}
          {ghLinkFrontEnd && ghLinkBackEnd && (
            <>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="primary" href={ghLinkFrontEnd} target="_blank">
                  <BsGithub /> &nbsp;
                  Front End
                </Button>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="primary" href={ghLinkBackEnd} target="_blank">
                  <BsGithub /> &nbsp;
                  Back End
                </Button>
              </Col>
            </>
          )}
        </Row>

        {!isBlog && demoLink && (
          <Row style={{ marginTop: "20px" }}>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
