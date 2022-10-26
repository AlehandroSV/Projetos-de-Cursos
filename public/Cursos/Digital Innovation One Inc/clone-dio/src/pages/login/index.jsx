import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Wrapper,
  Column,
  Title,
  Row,
  TitleLogin,
  Container,
  EsqueciText,
  CriarText,
  SubtitleLogin,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const handleClickSingIn = () => {
    navigate("/feed");
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin> Faça seu login e make the change._</SubtitleLogin>

            <form action="">
              <Input
                placeholder="E-Mail"
                type="email"
                leftIcon={<MdEmail size={18} />}
              />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock size={18} />}
              />
              <Button
                type="button"
                title="Entrar"
                variant="secondary"
                onClick={handleClickSingIn}
              />
            </form>

            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
