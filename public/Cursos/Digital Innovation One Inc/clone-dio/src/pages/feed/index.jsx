import React from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { TitleHighlight, Container, Column, Title } from "./styles";

const Login = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>

          <UserInfo
            percentual={35}
            name="Alehandro Vidal"
            image="https://github.com/alehandrosv.png"
          />

          <UserInfo
            percentual={80}
            name="Alehandro Vidal"
            image="https://github.com/alehandrosv.png"
          />

          <UserInfo
            percentual={100}
            name="Alehandro Vidal"
            image="https://github.com/alehandrosv.png"
          />

          <UserInfo
            percentual={50}
            name="Alehandro Vidal"
            image="https://github.com/alehandrosv.png"
          />
        </Column>
      </Container>
    </>
  );
};

export default Login;
