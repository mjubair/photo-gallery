import React from "react";

const Photo = ({ download_url, author }) => {
  return (
    <article className="photo">
      <img src={download_url} alt={`by ${author}`} />
    </article>
  );
};

export default Photo;
