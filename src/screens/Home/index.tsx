import React from "react";
import BankCard from "../../components/IconTabRoute/BankCard";
import {
  Container,
  Salutation,
  SalutationTitle,
  SalutationSubTitle,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Salutation>
        <SalutationTitle>Olá, Douglas Domiciano</SalutationTitle>
        <SalutationSubTitle>Bem vindo de volta</SalutationSubTitle>
      </Salutation>
      <BankCard />
    </Container>
  );
};

export default Home;
