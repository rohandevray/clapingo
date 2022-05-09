import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Book>
      <Left>
        <h1>Hone your english</h1>
        <h1>speaking skills over</h1>
        <h1>
          <span>one-to-one</span> video call
        </h1>
        <p>
          Practice english conversation with excellent communuicators <br />
          across the country and speak like a PRO 😎.
        </p>
        <div className="btns">
          <div className="lefty">
            <button>Book a trial</button>
          </div>
          <div className="righty">
            <button>Download our app</button>
          </div>
        </div>
      </Left>
      <div className="right">
        <Frama></Frama>
      </div>
    </Book>
  );
};

const Book = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  h1 {
    color: #001f27;
    font-weight: bolder;
    font-size: 4.5rem;
    font-weight: bolder;
    line-height: 5.5rem;
  }
`;

const Left = styled.div`
  width: 60%;
  padding: 7.6% 7%;
  position: relative;
  left: 2%;
  span {
    color: #22bda5;
  }
  p {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 600;
    color: #001f27;
    padding-top: 3%;
  }
  .btns {
    display: flex;
    padding-top: 7%;
  }
  .lefty {
    button {
      width: 11.8rem;
      height: 3.9rem;
      background-color: #ff736a;
      color: white;
      border: none;
      outline: none;
      border-radius: 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .righty {
    button {
      width: 16.8rem;
      height: 3.9rem;
      background: #ff736a;
      border-color: #ff736a;
      color: #ff736a;
      outline: none;
      border-radius: 2rem;
      margin-left: 2rem;
      background: transparent;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const Frama = styled.div`
  width: 430px;
  height: 300px;
  border-radius: 20px;
  border: 1px solid black;
  position: relative;
  top: 20%;
`;
export default Home;
