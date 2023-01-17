import React from "react";

export const GifItem = ({ images, title }) => {
  const { original } = images
  return (
    <div className="card">
      <img src={`${original.url}`} alt={original.url} />
      <p>{title}</p>
    </div>
  );
};
