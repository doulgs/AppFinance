import React from "react";

import { Container, Content } from "./styles";

import ImageBackground from "../../assets/CardBack.png";

const CardBalance: React.FC = () => {
  return (
    <Container>
      <Content source={ImageBackground} resizeMode="contain"></Content>
    </Container>
  );
};

export default CardBalance;
