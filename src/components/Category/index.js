import { Ancor, Image } from "./style";

const DEFAULT_IMG = "https://i.imgur.com/dJa0Hpl.jpeg";
export const Category = ({ cover = DEFAULT_IMG, path, emoji = "?" }) => (
  <Ancor href={path}>
    <Image src={cover} />
    {emoji}
  </Ancor>
);
