import { Ancor, Image } from "./style";
import { useNearScreem } from "../../hooks/useNearScreem";
import { Fragment } from "react";
const DEFAULT_IMG = "https://i.imgur.com/dJa0Hpl.jpeg";
export const Category = ({ cover = DEFAULT_IMG, path, emoji = "?" }) => {
  const [show, elemt] = useNearScreem();
  return (
    <Ancor href={path} ref={elemt}>
      {show && (
        <Fragment>
          <Image src={cover} />
          {emoji}
        </Fragment>
      )}
    </Ancor>
  );
};
