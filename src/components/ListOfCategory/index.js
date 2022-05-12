import React, { Fragment, useState, useEffect } from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import LoaderPhotoCategory from "../Styles/LoaderPhotoCategory";
import { useQuery } from "@apollo/client";
import { GET_CATEGORYS } from "../../hoc/QuerisGraphql";

const ListOfCategory = () => {
  const { loading, data } = useQuery(GET_CATEGORYS);
  const categories = data ? data.categories : [];

  const [showFIxed, setShowFIxed] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFIxed !== newShowFixed && setShowFIxed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showFIxed]);

  const rednderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <LoaderPhotoCategory />
      ) : (
        categories.map((category, key) => (
          <Item key={key}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );
  return (
    <Fragment>
      {rednderList(showFIxed)}
      {showFIxed && (
        <div
          style={{
            height: "124px",
          }}
        />
      )}
      {/* {showFIxed && rednderList(true, categories)} */}
    </Fragment>
  );
};

// const ListOfCategory = () => useMemo(ListOfCategoryCompoent);

export default ListOfCategory;

// function useCategoriesData() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(1);

//   useEffect(() => {
//     fetch("https://petgram-server-asdas.vercel.app/categories")
//       .then((res) => res.json())
//       .then((res) => setCategories(res));
//     setLoading(0);
//   }, []);
//   return { categories, loading };
// }
