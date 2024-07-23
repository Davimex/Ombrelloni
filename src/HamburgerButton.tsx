import { useState } from 'react';
import './HamburgerButton.scss';

const HamburgerButton = () => {

  const [toggle, setToggle] = useState(false);
  

  const handleClick = () => {
    setToggle(!toggle);
  }
  const isOpen = toggle ? 'open' : '';

  return (
    
    <>
      <div id="nav-icon4" onClick={handleClick} className={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )

}

export default HamburgerButton;