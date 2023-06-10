import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function GifItem({ title, url }) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
