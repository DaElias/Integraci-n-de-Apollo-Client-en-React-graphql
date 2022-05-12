import React, { Fragment } from "react";
import { useMutation } from "@apollo/client";
import { Img, ImgWrapper, Article } from "./styles";
import { useNearScreem } from "../../hooks/useNearScreem";
import FavButtom from "../FavButton";
import { LIKE_ANONIMUS_PHOTO } from "../../hoc/MutationsGraphql";
import { Link } from "react-router-dom";

const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG, liked = false }) => {
  const [LikeMutation] = useMutation(LIKE_ANONIMUS_PHOTO);

  const [show, elemt] = useNearScreem();
  const handleFavClick = () => LikeMutation({ variables: { input: { id } } });

  return (
    <Article ref={elemt}>
      {show && (
        <Fragment>
          <Link to={`/pet/photo/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButtom likedd={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  );
};

export default PhotoCard;
