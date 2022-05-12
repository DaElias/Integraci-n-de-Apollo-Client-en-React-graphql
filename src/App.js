import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import NavBar from "./components/NavBar";
import { DetailPhoto } from "./container/DetailPhoto";
import Favorites from "./container/Favorites";
import User from "./container/User";
import NotRegisterUser from "./container/NotRegisterUser";
import { TOKEN_NAME } from "./actions/types";

const UserLogin = ({ children }) => {
  const token = window.sessionStorage.getItem(TOKEN_NAME);
  //* validar Token */
  if (token) {
    return children;
  }
  return <NotRegisterUser />;
};

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
        <Route
          path="/"
          // element={<UserLogin=} children={<Home />} />}
          element={<Home />}
        />
        <Route
          path="/pet/:categoryId"
          // element={<UserLogin=} children={<Home />} />}
          element={<Home />}
        />
        <Route
          path="/pet/photo/:photoId"
          element={<UserLogin children={<DetailPhoto />} />}
        />
        <Route path="/favs" element={<UserLogin children={<Favorites />} />} />
        <Route path="/user" element={<UserLogin children={<User />} />} />
        <Route path="*" element={<UserLogin children={<Home />} />} />
      </Routes>
      <NavBar />
    </>
  );
}
export default App;
