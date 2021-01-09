import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import countapi from "countapi-js";

const Main = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  width: 100%;
  margin: 0;
`;
const Genre = styled.div``;
const Wrap = styled.div`
  display: flex;
  height: auto;
  margin: auto;
  flex-direction: row;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  justify-content: center;
  border-radius: 25px;

  background-image: radial-gradient(
    circle at center bottom,
    rgb(46, 46, 46) 0%,
    rgb(46, 46, 46) 6%,
    rgb(41, 41, 41) 6%,
    rgb(41, 41, 41) 27%,
    rgb(36, 36, 36) 27%,
    rgb(36, 36, 36) 42%,
    rgb(31, 31, 31) 42%,
    rgb(31, 31, 31) 63%,
    rgb(25, 25, 25) 63%,
    rgb(25, 25, 25) 64%,
    rgb(20, 20, 20) 64%,
    rgb(20, 20, 20) 71%,
    rgb(15, 15, 15) 71%,
    rgb(15, 15, 15) 100%
  );

  width: 80%;
`;

const L = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: white;
  margin: 1%;
  border-radius: 5px;
  padding: 8px;
  &:hover {
    background: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
    transition: all 300ms;
  }
`;

const Warning = styled.div`
  display: flex;
  height: auto;
  margin: 18px auto;
  flex-direction: row;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  justify-content: center;
  border-radius: 25px;

  background-image: radial-gradient(
    circle at center top,
    rgb(46, 46, 46) 0%,
    rgb(46, 46, 46) 6%,
    rgb(41, 41, 41) 6%,
    rgb(41, 41, 41) 27%,
    rgb(36, 36, 36) 27%,
    rgb(36, 36, 36) 42%,
    rgb(31, 31, 31) 42%,
    rgb(31, 31, 31) 63%,
    rgb(25, 25, 25) 63%,
    rgb(25, 25, 25) 64%,
    rgb(20, 20, 20) 64%,
    rgb(20, 20, 20) 71%,
    rgb(15, 15, 15) 71%,
    rgb(15, 15, 15) 100%
  );

  width: 80%;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: 100%;
    flex-direction: column;
    width: 95%;
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    margin: 45px auto;
    height: 100%;
    flex-direction: column;
    width: 90%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Summary = styled.div`
  overflow: hidden;
  background-size: cover;

  background-attachment: fixed;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);

  background-image: linear-gradient(
    135deg,
    rgb(42, 115, 113) 0%,
    rgb(42, 115, 113) 1%,
    rgb(2, 168, 148) 1%,
    rgb(2, 168, 148) 53%,
    rgb(0, 214, 193) 53%,
    rgb(0, 214, 193) 57%,
    rgb(85, 90, 102) 57%,
    rgb(85, 90, 102) 69%,
    rgb(65, 73, 82) 69%,
    rgb(65, 73, 82) 75%,
    rgb(35, 39, 43) 75%,
    rgb(35, 39, 43) 100%
  );
`;
const Heading = styled.h1`
  color: white;
  padding-bottom: 10px;
`;
const Synopsis = styled.div`
  display: flex;
  width: 90%;
  padding: 2%;
  flex-direction: column;
  border-radius: 0.8rem;
`;

const A = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  margin: 1%;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
    transition: all 300ms;
  }
`;
const Git = styled.a`
  text-decoration: none;
  color: white;
  margin: 30px;

  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    transform: scale(1.1);
    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 20px;
  left: -60px;
  background-image: linear-gradient(9deg, #7b0d93 0%, #ef5b00 100%),
    url("https://brave.com/wp-content/uploads/2018/09/coding-background-texture.jpg") !important;
  box-shadow: 0rem 2rem 5rem #282c34;
  transition: all 300ms ease;
  @media ${(props) => props.theme.mediaQueries.large} {
    transform: scale(1.03);
    left: -40px;
    transform: translate(40px, -30px);
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    width: 200px;
    left: -30px;
    height: 235px;
    transform: translate(30px, -20px);
  }
`;

const H2 = styled.h2`
  color: white;
  text-align: left;
  margin-bottom: 2%;
`;
const P = styled.p`
  text-align: left;
`;

const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 4px auto;

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin: auto;
    align-items: flex-start;
  }
`;

const Home = () => {
  const [genre, setgenre] = useState([]);
  const [loading, setloading] = useState(true);
  const [vist, setvist] = useState(0);

  useEffect(() => {
    countapi
      .update("animex.ninja", "864a5feb-66ee-4c0d-97a6-2f76c1d7e6ad", 1)
      .then((result) => {
        setvist(result.value);
      });
    fetch(`https://anime-x.vercel.app/api/genrelist`)
      .then((res) => res.json())
      .then((doc) => {
        setgenre(doc.list);
        setloading(false);
      });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Main>
          
      <Heading>Genres</Heading>
      <Wrap>
        <Div>
          {genre.map((ele, index) => {
            return (
              <L to={`/genre/${ele.split(" ").join("-")}/1`} key={index}>
                {ele}
              </L>
            );
          })}
        </Div>
      </Wrap>


      <Maindiv>
        <Git href="https://github.com/ashweru">
          <AiFillGithub
            style={{ position: "relative", top: "10px" }}
            size="2.5em"
          />
          Ashweru?
        </Git>
      </Maindiv>
    </Main>
  );
};
export default Home;
