import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./container/Home";
import NavBar from "./components/NavBar";
import { DetailPhoto } from "./container/DetailPhoto";
import Favorites from "./container/Favorites";
import User from "./container/User";
import NotRegisterUser from "./container/NotRegisterUser";
import { TOKEN_NAME } from "./actions/types";

const UserLogin = ({ isLoggedIn, children }) => {
  const token = localStorage.getItem(TOKEN_NAME);

  //* validar Token */
  if (token) {
    return children;
  }

  if (!isLoggedIn) {
    return <NotRegisterUser />;
  }
};

function App() {
  const state = useSelector((state) => state.user);
  const isLoggedIn = state.login;
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
          // element={<UserLogin isLoggedIn={isLoggedIn} children={<Home />} />}
          element={<Home />}
        />
        <Route
          path="/pet/:categoryId"
          // element={<UserLogin isLoggedIn={isLoggedIn} children={<Home />} />}
          element={<Home />}
        />
        <Route
          path="/pet/photo/:photoId"
          element={
            <UserLogin isLoggedIn={isLoggedIn} children={<DetailPhoto />} />
          }
        />
        <Route
          path="/favs"
          element={
            <UserLogin isLoggedIn={isLoggedIn} children={<Favorites />} />
          }
        />
        <Route
          path="/user"
          element={<UserLogin isLoggedIn={isLoggedIn} children={<User />} />}
        />
        <Route
          path="*"
          element={<UserLogin isLoggedIn={isLoggedIn} children={<Home />} />}
        />
      </Routes>
      <NavBar />
    </>
  );
}
export default App;
