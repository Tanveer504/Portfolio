import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanveer Kaur </span>
            from <span className="purple"> Rupnagar, Punjab, India.</span>
            <br /> I have one year and seven months of experience in writing Frontend development code with best practices.
            <br />
            I have pursued my Bachelor of TEchnology in Computer Science and Engineering in 2022.
            <br />
            <br />
            I am a collaborative team player with excellent problem-solving and analytical abilities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Art and Craft
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
          </ul>

          <p style={{ color: "#800080" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tanveer Kaur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
