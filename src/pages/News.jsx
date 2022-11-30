import React from "react";
import { Link } from "react-router-dom";
import { StyledSection } from "../components/styled/Section.styled";
import { Row, Card, Col, Button } from "antd";
import { useState } from "react";
import YouTube from "react-youtube";

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

    
        <Card className="Video">
          <iframe
            src="https://www.youtube.com/embed/NEzYn3rNWVc"
            frameborder="0"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/4OXY8ZKfmXA"
            frameborder="0"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/ddNzswo3DGc"
            frameborder="0"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/W-8fDAJ9oGI"
            frameborder="0"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/QxD9USj-bZY"
            frameborder="0"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/tlNFvuMQ9Yc"
            frameborder="0"
          ></iframe>
        </Card>
    
    </div>
  );
}

export default News;
