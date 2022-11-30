import React from "react";
import { Link } from "react-router-dom";
import mepoupe from "../assets/LogoRedeSocial.jpg";
import mepoupevideos from "../assets/VideosRedeSocial.jpg";
import logob3 from "../assets/LogoB3.jpg";
import videob3 from "../assets/VideosB3.jpg";
import { StyledSection } from "../components/styled/Section.styled";
import { Row, Card, Col, Button } from "antd";
import { useState } from "react";


function News() {

  const [youtubeID] = useState('IEDEtZ4UVtI')

  return (
    <StyledSection>
      <div>
        <div className="CreatePage">
        <p></p>
          <Link to={`/`}>
        
            <button> HomePage</button>
          </Link>
          <p></p>
          <Link to={`/profile`}>
       
            <button>User Profile</button>
            <p></p>
          </Link>
        
        </div>

        <Row className="SocialMedia">
          <Card>
            <Link to={"www.mepoupe.com"}>
              <img className="image4" src={mepoupe} alt="Result Preview" />
              <img
                className="image5"
                src={mepoupevideos}
                alt="Result Preview"
              />
            </Link>
            <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
</iframe>
            <h3> Youtube Channel: Learn about Manage Your Money.</h3>
            <h3> Videos with 6 millions of views per month.</h3>
          </Card>
        </Row>
      </div>
    </StyledSection>
  );
}

export default News;
