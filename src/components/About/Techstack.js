import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
  DiBootstrap,
  DiGithub,
  DiBitbucket,
  DiJira,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiHtml5/>
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiCss3 />
        CSS
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
      <DiJavascript1 />
      Javascript
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiReact />
        React
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiBootstrap/>
        Bootstrap
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <SiRedux />
        Redux
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiJira/>
        <p>Jira</p>
      </Col>
    </Row>
  );
}

export default Techstack;
