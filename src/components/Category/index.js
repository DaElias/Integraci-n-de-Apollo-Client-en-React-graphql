import { Ancor, Image } from "./style";
import { useNearScreem } from "../../hooks/useNearScreem";
import { Link } from "react-router-dom";

const DEFAULT_IMG = "https://i.imgur.com/dJa0Hpl.jpeg";
export const Category = ({ cover = DEFAULT_IMG, path, emoji = "?", id }) => {
  const [show, elemt] = useNearScreem();
  return (
    <Ancor ref={elemt}>
      {show && (
        <Link to={`/pet/${id}`} style={{ textDecoration: "none" }}>
          <Image src={cover} />
          {emoji}
        </Link>
      )}
    </Ancor>
  );
};
