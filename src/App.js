import ListOfCategory from "./components/ListOfCategory";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import ListPhotoCard from "./components/ListPhotoCard";
import Logo from "./components/Logo";
function App() {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategory />
      <ListPhotoCard />
    </>
  );
}

export default App;
