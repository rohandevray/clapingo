import React from "react";
import styled from "styled-components";
import Iphone from "../images/iphone.png";

const Work = () => {
  return (
    <Xbox>
      <div className="down">
        <h1>How it works ?</h1>
        <Play>
          <div className="left">
            <Box>
              <h2>1. Create Account</h2>
              <p>
                Create your account using phone <br /> number or email and take
                a free trial <br /> at ₹1.
              </p>
            </Box>
            <Fox>
              <h2>3. Select time slot</h2>
              <p>
                Subscribe & select any time slot between
                <br /> 10 AM to 12 midnight.
              </p>
            </Fox>
          </div>
          <div className="image">
            <img src={Iphone} alt="" />
            <div className="glass"></div>
          </div>
          <div className="right">
            <Box>
              <h2>2. Subscribe</h2>
              <p>
                Choose your preferred duration and <br />
                select subscription package for your
                <br /> sessions.{" "}
              </p>
            </Box>

            <Fox>
              <h2>4. You are done</h2>
              <p>
                That's it! Start practicing and reach <br />
                your learning goal in speaking.
              </p>
            </Fox>
          </div>
        </Play>
      </div>
    </Xbox>
  );
};

const Xbox = styled.div`
  width: 100%;
  height: 100vh;
  h1 {
    position: relative;
    left: 11%;
    top: 5%;
    font-size: 40px;
  }
  .down {
    position: relative;
    top: 7%;
  }
  .image {
    img {
      height: 90%;
      position: relative;
      top: 8%;
      border-radius: 1.5rem;
      box-shadow: #c2e5de 0px 50px 1000px -20px, #c2e5de 0px 30px 60px -30px;
    }
    .glass {
      position: absolute;
      width: 255px;
      height: 150px;
      bottom: 1.6%;
      left: 40%;
      background: linear-gradient(
        180deg,
        rgba(251, 251, 253, 0) -50%,
        #fbfbfd 74.21%
      );
    }
  }
`;

const Play = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 7%;
  .left {
    width: 320px;
  }
  .right {
    width: 320px;
  }
`;
const Box = styled.div`
  position: relative;
  top: 10%;
  height: 130px;
  padding: 5% 7%;
  box-shadow: 26px 26px 23px rgba(204, 210, 212, 0.36);
  border-radius: 12px;
  border: 1.5px solid rgba(204, 210, 212, 0.36);
  h2 {
    font-size: 20px;
    color: #001f27;
  }
  p {
    font-size: 13px;
    color: #808f93;
    padding-top: 2%;
  }
`;
const Fox = styled.div`
  position: relative;
  top: 30%;
  height: 130px;
  padding: 5% 7%;
  box-shadow: 26px 26px 23px rgba(204, 210, 212, 0.36);
  border-radius: 12px;
  border: 1.5px solid rgba(204, 210, 212, 0.36);
  h2 {
    font-size: 20px;
    color: #001f27;
  }
  p {
    font-size: 13px;
    color: #808f93;
    padding-top: 2%;
  }
`;
export default Work;
