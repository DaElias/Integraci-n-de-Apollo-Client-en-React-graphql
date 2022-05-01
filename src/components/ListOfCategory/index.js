import React, { Fragment, useState, useEffect } from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import LoaderPhotoCategory from "../Styles/LoaderPhotoCategory";
//* customhook

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    fetch("https://petgram-server-asdas.vercel.app/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
    setLoading(0);
  }, []);
  return { categories, loading };
}

const ListOfCategory = () => {
  const { categories, loading } = useCategoriesData();
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
      {rednderList()}
      {showFIxed && rednderList(true)}
    </Fragment>
  );
};

export default ListOfCategory;
