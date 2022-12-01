import React from "react";
import { Link } from "react-router-dom";
import { StyledSection } from "../components/styled/Section.styled";
import { useState } from "react";

import Card from "react-bootstrap/Card";

function News() {
  return (
    <div className="CreatePage">
      <p></p>
      <Link to={`/`}>
        <button> HomePage</button>
      </Link>
      <Link to={`/profile`}>
        <button>Profile</button>
        <p></p>
      </Link>

      <Card id = "someRandomID"
        style={{
          marginLeft: "-150px",
          marginTop: "40px",
          marginRight: "10px",
          width: "100%",
          height: "auto",
          position: "relative",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title></Card.Title>
          <iframe
            width="250"
            height="150"
            src="https://www.youtube.com/embed/5etGcjdZweQ"
            frameborder="0"
          ></iframe>

          <textarea name="description" cols="30" rows="2">
            {" "}
          </textarea>
        </Card.Body>
      </Card>
      <Card
        style={{
          marginLeft: "10px",
          marginTop: "40px",
          width: "100%",
          height: "auto",
          position: "relative",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title></Card.Title>
          <iframe
            width="250"
            height="150"
            src="https://www.youtube.com/embed/i1pzNg2NkJ4"
            frameborder="0"
          ></iframe>

          <textarea name="description" cols="30" rows="2">
            {" "}
          </textarea>
        </Card.Body>
      </Card>
      <Card
        style={{
          marginLeft: "10px",
          marginTop: "40px",
          width: "100%",
          height: "auto",
          position: "relative",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title></Card.Title>
          <iframe
            width="250"
            height="150"
            src="https://www.youtube.com/embed/tzd6p9vCnMY"
            frameborder="0"
          ></iframe>
          <textarea name="description" cols="30" rows="2">
            {" "}
          </textarea>
        </Card.Body>
      </Card>
      <Card
        style={{
          marginLeft: "-870px",
          marginTop: "250px",
          marginRight: "10px",
          width: "100%",
          height: "auto",
          position: "relative",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title></Card.Title>
          <iframe
            width="250"
            height="150"
            src="https://www.youtube.com/embed/gJ7ZQxfP_dA"
            frameborder="0"
          ></iframe>
          <textarea name="description" cols="30" rows="2">
            {" "}
          </textarea>
        </Card.Body>
      </Card>
      <Card
        style={{
          marginLeft: "10px",
          marginTop: "250px",
          width: "100%",
          height: "auto",
          position: "relative",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title></Card.Title>
          <iframe
            width="250"
            height="150"
            src="https://www.youtube.com/embed/gr0ASU0iaWs"
            frameborder="0"
          ></iframe>
          <textarea name="description" cols="30" rows="2">
            {" "}
          </textarea>
        </Card.Body>
      </Card>
      <Card
        style={{
          marginLeft: "10px",
          marginTop: "250px",
          width: "100%",
          height: "auto",
          position: "relative",
          display: "flex",
        }}
      >
        <Card.Body>
          <Card.Title></Card.Title>
          <iframe
            width="250"
            height="150"
            src="https://www.youtube.com/embed/ZJgO-vvmJD0"
            frameborder="0"
          ></iframe>
          <textarea name="description" cols="30" rows="2">
            {" "}
          </textarea>
        </Card.Body>
      </Card>
    </div>
  );
}

export default News;
