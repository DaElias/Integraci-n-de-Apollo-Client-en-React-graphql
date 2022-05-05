import { Route, Routes } from "react-router-dom";
import useLogin from "./hoc/useLogin";
import Home from "./container/Home";
import NavBar from "./components/NavBar";
import { DetailPhoto } from "./container/DetailPhoto";
import Favorites from "./container/Favorites";
import User from "./container/User";
import NotRegisterUser from "./container/NotRegisterUser";

const UserLogin = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <NotRegisterUser />;
  }
  return children;
};

function App() {
  const state = useLogin();
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
