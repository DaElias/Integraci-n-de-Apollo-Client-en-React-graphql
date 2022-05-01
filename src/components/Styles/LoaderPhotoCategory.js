import React from "react";
import { Item } from "../ListOfCategory/styles";
import { Ancor } from "../Category/style";
import { TextSkeleton } from "light-skeleton";
const LoaderPhotoCategory = () => {
  return [1, 2, 3].map((key) => (
    <Item key={key}>
      <Ancor href="#">
        <TextSkeleton
          style={{
            border: "1px solid #dd",
            boxShadow: "0px 10px 14px rgba(0, 0, 0, 0.2)",
            borderRadius: "50%",
            overflow: "hidden",
            height: "75px",
            width: "75px",
          }}
        />
        <TextSkeleton />
      </Ancor>
    </Item>
  ));
};

export default LoaderPhotoCategory;
