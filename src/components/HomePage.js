import React from "react";
import styled from "styled-components";
import Section from "./Section";
import models from "../carInfo.json";

function HomePage() {
  return (
    <Container>
      {models.map((model) => (
        <Section
          key={model.id}
          title={model.title}
          description={model.description}
              src={model.image}
              ltext={model.Ltext }
              rtext={model.Rtext}
        />
      ))}
          
    </Container>
  );
}

export default HomePage;
const Container = styled.div`
  height: 100vh;
`;
