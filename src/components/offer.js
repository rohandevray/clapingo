import React from "react";
import styled from "styled-components";
import FigX from "../images/figx.png";
import FigY from "../images/figy.png";
import FigZ from "../images/figz.png";

const Offer = () => {
  return (
    <Cards>
      <h1>What we offer ?</h1>
      <div className="chad">
        <Card>
          <img src={FigX} alt="" />
          <Text>
            <h3>Customised Curriculum</h3>
            <p>
              Customised sessions and module for <br /> Basic, Intermediate and
              Advanced learners.
            </p>
          </Text>
        </Card>
        <Card>
          <img src={FigY} alt="" />
          <Text>
            <h3> Experimental Learning </h3>
            <p>
              Do not study English, rather consume <br /> and use it.
            </p>
          </Text>
        </Card>
        <Card>
          <img src={FigZ} alt="" />
          <Text>
            <h3>Shadowing Method</h3>
            <p>
              Think and speak in English rather than <br /> translating it from
              mother tongue.
            </p>
          </Text>
        </Card>
      </div>
    </Cards>
  );
};

const Cards = styled.div`
  width: 100%;
  height: 90vh;
  h1 {
    text-align: center;
    padding-top: 8%;
    font-weight: bolder;
    font-size: 40px;
  }
  .chad {
    display: flex;
    justify-content: space-around;
    padding: 3% 15%;
  }
  img {
    width: 100%;
    height: 130%;
    object-fit: cover;
    border-radius: 1.5rem;
  }
`;

const Card = styled.div`
  width: 22rem;
  height: 20rem;
`;

const Text = styled.div`
  z-index: 10;
  text-align: left;
  padding: 3% 7%;
  position: relative;
  bottom: 42%;
  height: 40%;
  h3 {
    color: #00d2ff;
    font-weight: 600;
  }
  p {
    color: #ffffff;
    padding-top: 2%;
  }
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) -14.34%,
    #c4c4c4 116.43%
  );
`;

export default Offer;
