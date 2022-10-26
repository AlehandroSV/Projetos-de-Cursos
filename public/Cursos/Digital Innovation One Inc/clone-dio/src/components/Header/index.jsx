import React from "react";
import { Button } from "../Button";

import {
  BuscarInputContainer,
  Wrapper,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
} from "./styles";

export const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src="/logo-dio.svg" width="100px" alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer title="Entrar">
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>

              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://github.com/alehandrosv.png" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};
