import React from "react";
import styled from "styled-components";
import Icon from "../images/xmen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <Log>
      <Card>
        <div className="main">
          <img src={Icon} alt="" />
          <h1>Welcome</h1>
          <form action="">
            <div className="user">
              <FontAwesomeIcon
                icon={faUser}
                size="2x"
                color="#13c4a8"
                id="pass"
              />
              <input type="text" placeholder="UserID" />
            </div>
            <div className="pass">
              <FontAwesomeIcon
                icon={faLock}
                size="2x"
                color="#13c4a8"
                id="pass"
              />
              <input type="text" placeholder="Password" /> <br />
            </div>

            <button>Log In</button>
          </form>
        </div>
      </Card>
    </Log>
  );
};

const Log = styled.div`
  width: 100%;
  height: 100vh;
  .main {
    padding-top: 10%;
  }
`;
const Card = styled.div`
  width: 32rem;
  height: 60%;
  position: absolute;
  left: 47%;
  text-align: center;
  top: 50%;
  transform: translate(-47%, -50%);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  img {
    width: 25%;
  }
  form {
    text-align: center;
  }
  #pass {
    position: relative;
    left: 15px;
    top: 10px;
  }
  .user,
  .pass {
    max-width: 325px;
    width: 100%;
    height: 50px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    position: relative;
    margin-left: 2.5rem;
    margin-top: 4%;
  }
  .pass {
    input {
      margin-top: 5%;
    }
  }
  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
    &::placeholder {
      color: #aaa;
      font-weight: 500;
    }
  }
  button {
    margin-top: 6%;
    width: 10rem;
    height: 3.9rem;
    border-radius: 55px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #13c4a8;
    color: white;
    font-size: 1.42rem;
    font-family: 600;
  }
`;
export default Login;
