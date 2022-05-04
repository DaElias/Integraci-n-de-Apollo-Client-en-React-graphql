import React, { Fragment } from "react";
import { useMutation } from "@apollo/client";
import { Img, ImgWrapper, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreem } from "../../hooks/useNearScreem";
import FavButtom from "../FavButton";
import { LIKE_ANONIMUS_PHOTO } from "../../hoc/MutationsGraphql";

const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG, liked = false }) => {
  const [LikeMutation] = useMutation(LIKE_ANONIMUS_PHOTO);
  const ID_KEY = `liked-${id}`;
  const [likedd, setLiked] = useLocalStorage(ID_KEY, liked);
  const [show, elemt] = useNearScreem();


  const handleFavClick = () => {
    setLiked(!likedd);
    if (!likedd) {
      console.log("Like");
      LikeMutation({ variables: { input: { id } } });
    } else {
      console.log("disLike");
    }
  };

  return (
    <Article ref={elemt}>
      {show && (
        <Fragment>
          <a href={`?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButtom likedd={likedd} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  );
};

export default PhotoCard;
