import React from "react";
import { useTheme } from "styled-components/native";
import { KeyboardAvoidingView, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Input from "../../components/Input";
import Button from "../../components/Button";

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

const Login: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  function handleSignUp() {
    navigation.navigate("Register");
  }

  return (
    <Container>
      <ContentHeader>
        <Title>BEM VINDO {`\n`} ao App Carteira</Title>

        <Description>Acesse sua conta de forma simple e rapida</Description>
      </ContentHeader>

      <ContentBody>
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
        <LinkContainer onPress={handleSignUp}>
          <LinkText>
            Não tem uma conta ainda?
            <Text style={{ color: "blue" }}>Registrar-se</Text>
          </LinkText>
        </LinkContainer>
      </ContentFooter>
    </Container>
  );
};

export { Login };
