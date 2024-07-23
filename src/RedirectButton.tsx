import React from 'react';
import './RedirectButton.scss';

interface RedirectButton {
  btnTxt: string;
}

const RedirectButton: React.FC<RedirectButton> = ({ btnTxt }) => {
  return (
    <button>
      <p className='button-p'>{btnTxt}<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 centerSvg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg></p>
    </button>
  );
};

export default RedirectButton;
