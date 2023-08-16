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
  DiSass,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiHtml5/>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiCss3 />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
      <DiJavascript1 />
      
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiReact />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiSass />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <SiTypescript />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiBootstrap/>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiGit />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <SiRedux />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"#FFCD00"}}>
        <DiJira/>
        
      </Col>
    </Row>
  );
}

export default Techstack;
