import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
// import NotFund from "./container/NotFund";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
function App() {

  // * important !
  Promise.resolve(
    typeof window.IntersectionObserver !== "undefined"
      ? window.IntersectionObserver
      : import("intersection-observer")
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pet/:id" element={<Home />} />
      <Route path="/pet/photo/:id" element={<PhotoCardWithQuery />} />
    </Routes>
  );
}
export default App;
