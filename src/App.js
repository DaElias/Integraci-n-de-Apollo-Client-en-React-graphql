import { Fragment } from "react";
import ListOfCategory from "./components/ListOfCategory";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import ListPhotoCard from "./components/ListPhotoCard";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import Logo from "./components/Logo";
function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");


  // * important !
  Promise.resolve(
    typeof window.IntersectionObserver !== "undefined"
      ? window.IntersectionObserver
      : import("intersection-observer")
  );

  return detailId ? (
    <Fragment>
      <PhotoCardWithQuery id={detailId} />
    </Fragment>
  ) : (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategory />
      <ListPhotoCard />
    </>
  );
}

export default App;
