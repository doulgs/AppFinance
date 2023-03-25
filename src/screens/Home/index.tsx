import React from "react";

import {
  CHeader,
  Container,
  ContentBody,
  ContentHeader,
  Profile,
  ProfileIcon,
  SubTitle,
  Title,
} from "./styles";

import UserImage from "../../assets/ProfileUser.jpg";
import CardBalance from "../../components/CardBalance";

const Home: React.FC = () => {
  return (
    <Container>
      <ContentHeader>
        <CHeader>
          <Title>Olá, Bom Dia</Title>
          <SubTitle>Active</SubTitle>
        </CHeader>
        <ProfileIcon>
          <Profile source={UserImage} resizeMode="contain" />
        </ProfileIcon>
      </ContentHeader>

      <ContentBody>
        <CardBalance />
      </ContentBody>
    </Container>
  );
};

export { Home };
