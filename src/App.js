import React from "react";
import styled from "@emotion/styled";

const Botton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #of574e 100%
  );
  background-size: 300px
  font-family: Arial, helvetica, sans-serif;
  color: #fff;
  margin-top:3rem;
  padding: 1rem 3 rem;
  font-size:2rem;
  border: 2px solid black;
`;

function App() {
  return <Botton>Breaking Bad</Botton>;
}

export default App;
