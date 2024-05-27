import React from "react";

const styles = {
  article: {
    marginTop: 40,
  },
  h3: {
    marginBottom: 3,
    textTransform: "uppercase",
  },
  span: {
    display: "block",
    marginBottom: 10,
    fontSize: 12,
  },
  p: {
    fontSize: 15,
  },
};

const Article = ({ title, author, content }) => {
  return (
    <article style={styles.article}>
      <h3 style={styles.h3}>{title}</h3>
      <span style={styles.span}>{author}</span>
      <p style={styles.p}>{content}</p>
    </article>
  );
};

export default Article;
