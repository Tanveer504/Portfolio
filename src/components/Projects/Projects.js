import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import apnabazar from "../../Assets/Projects/apnabazar.jpg";
import movie from "../../Assets/Projects/movie.jpg";
import todo from "../../Assets/Projects/todo.png";
import weather from "../../Assets/Projects/weather.png";
import pokedex from "../../Assets/Projects/pokedex.jpg";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import blog from "../../Assets/Projects/blog.png";

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
              imgPath={apnabazar}
              isBlog={false}
              title="Apna Bazaar"
              description="An E-Commerce Web App, developed with React.js, delivers a modern and engaging shopping experience. It features a comprehensive product catalog, intuitive search and filtering options, seamless checkout, and personalized recommendations, all wrapped in a responsive design for effortless browsing across devices. With React's dynamic rendering and state management, users can explore products, add to cart, and complete purchases efficiently and enjoyably."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="CineMango"
              description="The Movies App, built with React.js, offers a captivating movie exploration experience. With a vast selection of films, dynamic search and filtering, detailed movie information, and user ratings, it's a hub for cinephiles. React's responsive design and efficient state management ensure seamless navigation and personalized recommendations, making it the ultimate destination for movie enthusiasts.This dynamic application allows movie enthusiasts to discover, explore, and engage with a vast collection of films from various genres."
             
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Our Weather App, powered by React.js, provides real-time weather updates with simplicity and precision. Users can effortlessly check current conditions, forecasts, and detailed information for any location. React's dynamic rendering ensures a seamless experience, allowing users to access accurate weather data across devices. With an intuitive interface and efficient state management, staying informed about weather conditions has never been easier."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-do List App"
              description="Our Todo List App simplifies task management through an intuitive interface built with React.js. Create, organize, and track tasks with ease, benefiting from dynamic updates that reflect real-time changes. With prioritization, due dates, and status tracking, users can stay organized effortlessly. React's state management ensures a responsive experience, making task management efficient and stress-free."
                         
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex App"
              description="A Pokedex App, developed with React.js, provides a comprehensive platform for exploring a diverse collection of Pokémon. Users can easily browse and discover details about various species, including stats, abilities, and evolutions. Leveraging React's dynamic rendering and state management, the app offers a fluid and interactive experience, allowing trainers to immerse themselves in the world of Pokémon with ease and excitement."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog App"
              description="A Blog App is a user-friendly platform designed for seamless content creation and consumption. Using HTML and CSS, we've crafted an appealing layout for articles, while JavaScript handles interactive features like user comments and dynamic content updates. This app empowers writers to share their thoughts effectively and readers to engage with compelling articles effortlessly, providing an enriching blogging experience."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
