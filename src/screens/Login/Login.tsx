import React from "react";
import { SafeAreaView, Text } from "react-native";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { Input } from "../../components/Input/Input";

import {
  Container,
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter,
} from "./styles";

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja Bem Vindo(a) {`\n`} a Carteira App</Title>

          <Description>Entrar com redes sociais</Description>

          <ViewButton>
            <ButtonSocialGoogle title="Google" />
            <ButtonSocial title="Facebook" iconName="facebook" />
          </ViewButton>
        </ContentHeader>

        <ContentBody>
          <Input iconName="mail" />
        </ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
