import React from 'react';

const UrlCard = ({ title, short_url, long_url }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <a href={short_url} target="blank">{short_url}</a>
      <p>{long_url}</p>
    </div>
  )
}

export default UrlCard;