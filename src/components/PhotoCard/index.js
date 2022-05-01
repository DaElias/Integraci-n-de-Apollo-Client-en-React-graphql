import React, { Fragment } from "react";
import { Button, Img, ImgWrapper, Article } from "./styles";
import { ButtonLiked } from "../Styles/componentStyled";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreem } from "../../hooks/useNearScreem";
const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG, liked = false }) => {
  const ID_KEY = `liked-${id}`;
  const [likedd, setLiked] = useLocalStorage(ID_KEY, liked);
  const [show, elemt] = useNearScreem();

  return (
    <Article ref={elemt}>
      {show && (
        <Fragment>
          <a href={`?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!likedd)}>
            <ButtonLiked liked={likedd} color="#C70039" />
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};

export default PhotoCard;
