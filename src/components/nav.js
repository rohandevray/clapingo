import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Main>
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>clapingo</h1>
      </div>
      <div className="para">
        <p>Plans & Pricing</p>
        <p>Teach with us</p>
        <p>Affiliate Program</p>
        <p>Kids</p>
      </div>
      <div className="btn">
        <button>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <FontAwesomeIcon icon={faUser} size="1x" color="white" id="user" />
            Login
          </Link>
        </button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 1% 8.7%;
  box-shadow: 0px 2px 22px 0px rgba(82, 164, 154, 0.08),
    inset 0 -1px 0 rgba(0, 0, 0, 0.06);

  .logo {
    display: flex;
    color: #22bda5;
    img {
      height: 90%;
    }
    position: relative;
    top: 3px;
  }
  .para {
    display: flex;
    font-size: 1.15rem;
    width: 60%;
    font-weight: bold;
    letter-spacing: 0.2px;
    p {
      padding: 1.4% 5.4%;
    }
  }
  .btn {
    button {
      background: linear-gradient(360deg, #52a49a -65.93%, #00cdac 100%);
      border-radius: 60px;
      width: 8rem;
      height: 3.2rem;
      border: none;
      outline: none;
      color: white;
      cursor: pointer;
      #user {
        padding-right: 0.5rem;
      }
    }
  }
`;
export default Nav;
