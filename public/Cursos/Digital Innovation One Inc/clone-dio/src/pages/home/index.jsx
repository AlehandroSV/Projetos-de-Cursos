import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TitleHighlight, Title, TextContent } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSingIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts
          </TextContent>
          <Button
            type="button"
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSingIn}
          />
        </div>
        <div>
          <img src="/banner-home.png" alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
