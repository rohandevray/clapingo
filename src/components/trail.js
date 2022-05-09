import React from "react";
import styled from "styled-components";

const Book = () => {
  return (
    <Trial>
      <Left>
        <Box>
          <div className="top">
            <Card>
              <h1>
                50K <span>+</span>{" "}
              </h1>
              <p>Mobile Downloads</p>
            </Card>
            <Card>
              <h1>
                80K<span>+</span>
              </h1>
              <p>Happy learners</p>
            </Card>
          </div>
          <div className="below">
            <Card>
              <h1>
                53K<span>+</span>
              </h1>
              <p>Sessions per month</p>
            </Card>
            <Card>
              <h1>
                200K<span>+</span>
              </h1>
              <p>Speakers around the globe</p>
            </Card>
          </div>
        </Box>
      </Left>

      <Right>
        <p className="mini">Book a trial</p>
        <h1>Start your English</h1>
        <h1>speaking journey today!</h1>
        <p className="down">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Neque
          pellentesque praesent vitae sit sagittis <br />
          venenatis.
        </p>
        <button>Book a trail</button>
      </Right>
    </Trial>
  );
};

const Trial = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  height: 45vh;
  background: linear-gradient(
    90deg,
    #00d2ff -13.02%,
    rgba(0, 210, 255, 0) 103.77%
  );
`;

const Box = styled.div`
  .top,
  .below {
    display: flex;
    color: white;
    padding: 2%;
  }
  .below {
    position: relative;
    left: 10%;
  }
  p {
    font-size: 0.8rem;
  }
  width: 60%;
  height: 80%;
  position: relative;
  left: 20%;
  top: 10%;
`;

const Card = styled.div`
  background: #3a3636;
  width: 15rem;
  height: 7rem;
  padding: 4% 5%;
  margin-left: 10%;
  margin-top: 5%;
  text-align: center;
  span {
    color: #19c0a6;
  }
  border-radius: 1rem;
`;

const Right = styled.div`
  width: 50%;
  height: 40vh;
  padding-top: 2%;
  padding-left: 5%;
  .mini {
    color: #139980;
    font-weight: bold;
  }
  h1 {
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: bolder;
  }
  .down {
    padding-top: 1.5%;
    color: #738489;
    font-weight: 600;
  }
  button {
    width: 10.4rem;
    height: 3.3rem;
    background-color: #ff736a;
    color: white;
    border: none;
    outline: none;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 3%;
  }
`;
export default Book;
