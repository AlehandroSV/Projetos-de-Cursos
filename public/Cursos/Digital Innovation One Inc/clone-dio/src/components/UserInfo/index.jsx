import React from "react";

import { Container, NameText, Progress, UserPicture } from "./styles";

export const UserInfo = ({ name, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};
