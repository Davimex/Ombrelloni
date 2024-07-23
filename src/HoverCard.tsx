import React from 'react';
import './HoverCard.scss';
import RedirectButton from './RedirectButton';
interface HoverCardProps {
  image: string;
  text: string;
  text2: string;
  title2: string;
  btnTxt: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ image, text, text2, title2 }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }} data-aos="fade" data-aos-delay="400">
      <div className="first-content">
        <span className='textLabel'>{text}</span>
      </div>
      <div className="second-content">
        <span style={{ fontWeight: 800 }}><b>{title2}</b></span>
        <span>{text2}</span>
        <RedirectButton btnTxt='SCOPRI'></RedirectButton>
      </div>
    </div>
  );
};

export default HoverCard;
