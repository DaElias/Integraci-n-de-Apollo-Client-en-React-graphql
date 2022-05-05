import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import NavBar from "./components/NavBar";
// import NotFund from "./container/NotFund";
import { DetailPhoto } from "./container/DetailPhoto";
function App() {
  // * important !
  Promise.resolve(
    typeof window.IntersectionObserver !== "undefined"
      ? window.IntersectionObserver
      : import("intersection-observer")
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path="/pet/photo/:photoId" element={<DetailPhoto />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <NavBar />
    </>
  );
}
export default App;
