import React from 'react';
import { Job } from '../../pages/FindJobs';
import './Card.style.scss';
export interface CardProps extends Job {}
export const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className='card'>
      <img src={image} alt='profile' className='image' />
      <div className='info'>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>
        <div className='details'>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};
