import React, { Fragment } from "react";
import { Div, SubTitle, Title } from "./styles";
import Helmet from "react-helmet";

const HelmetLayaout = ({
  title = "",
  content = "",
  children,
  emoji = "",
  home = false,
}) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {content && <meta name="description" content={content} />}
      </Helmet>
      <Div style={{ textAlign: "center" }}>
        {!home && (
          <Title>
            {title} {emoji}
          </Title>
        )}
      </Div>
      <SubTitle>{!home && <h3>{content}</h3>}</SubTitle>
      {children}
    </Fragment>
  );
};

export default HelmetLayaout;
