import { Fragment } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
const Container = styled.div`
  transform: scale(1);
  transition: 0.5s;
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

export const PlaceholderListCard = styled.div`
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 10px;
  min-height: 350px;
  min-width: 220px;
  max-height: 90%;
  max-width: 90%;
`;
export const PlaceHolderButtom = styled.div`
  background-color: #ddd;
  margin-top: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;


export const PlaceholderOnlyPhoto = styled.div`
  background-color: #ddd;
  min-height: 553px;
  min-width: 300px;
  @media (min-width: 768px) {
    width: 600px;
  }
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
`;

export const PlaceHolderCategory = styled.div`
  background-color: #ddd;
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  height: 75px;
  width: 75px;
  margin-bottom: 4px;
`;



