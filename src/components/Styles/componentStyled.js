import { Fragment } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  transform: scale(1);
  transition: .5s;
  &:active {
    transform: scale(1.5);
  }
`;

export const ButtonLiked = ({ liked = false, size = 30, color = "black" }) => {
  const Icon = liked ? BsHeartFill : BsHeart;
  return (
    <Fragment>
      <Container>
        <Icon size={size} color={color} />
      </Container>
    </Fragment>
  );
//   return <Container>{liked ? <BsHeartFill /> : <BsHeart />}</Container>;
};
