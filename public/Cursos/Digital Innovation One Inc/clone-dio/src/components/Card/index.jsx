import React from "react";

import {
  CardContainer,
  Content,
  UserPicture,
  UserInfo,
  PostInfo,
  ImageBackground,
  HasInfo,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";

export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://picsum.photos/1000/1000" />
      <Content>
        <UserInfo>
          <UserPicture src="https://github.com/alehandrosv.png" />
          <div>
            <h4>Alehandro Vidal</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de HTML e CSS no Bootcamp DIO do Global
            avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp />
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
