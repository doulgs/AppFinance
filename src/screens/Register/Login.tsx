import React from "react";
import { useTheme } from "styled-components/native";
import { KeyboardAvoidingView, Text } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";

import {
  Container,
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter,
  LinkContainer,
  LinkText,
} from "./styles";

const Register: React.FC = () => {
  const { COLORS } = useTheme();
  return (
    <Container>
      <ContentHeader>
        <Title>Crie sua conta {`\n`}no App Carteira</Title>

        <Description>Entrar com redes sociais</Description>

        <ViewButton>
          <ButtonSocialGoogle title="Google" />
          <ButtonSocial title="Facebook" iconName="facebook" />
        </ViewButton>
      </ContentHeader>

      <ContentBody>
        <Input
          placeholder="User"
          LeftIcon
          iconNameLeft="mail"
          iconSize={25}
          iconColor={COLORS.GRAY3}
        />
        <Input
          placeholder="Email"
          LeftIcon
          iconNameLeft="mail"
          iconSize={25}
          iconColor={COLORS.GRAY3}
        />

        <Input
          placeholder="Senha"
          LeftIcon
          RightIcon
          iconNameLeft="lock-closed"
          iconNameRight="ios-eye"
          iconSize={25}
          iconColor={COLORS.GRAY3}
          secureTextEntry
        />
      </ContentBody>
      <ContentFooter>
        <Button title="Acessar" onPress={() => console.log("test")} />
        <LinkContainer>
          <LinkText>
            Já possui uma conta?
            <Text style={{ color: "blue" }}>Acessar</Text>
          </LinkText>
        </LinkContainer>
      </ContentFooter>
    </Container>
  );
};

export { Register };
