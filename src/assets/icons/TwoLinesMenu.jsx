import React from 'react';

const TwoLineMenuSVG = ({ onClick }) => (
  <svg
    onClick={onClick}
    width="32"
    height="24"
    viewBox="0 0 32 24"   // change viewBox width to 100
    fill="none"
    stroke="black"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ cursor: 'pointer' }}
    aria-label="Two line menu"
    role="img"
  >
    {/* lines closer vertically */}
    <line x1="2" y1="9" x2="98" y2="9" />
    <line x1="2" y1="14" x2="98" y2="14" />
  </svg>
);

export default TwoLineMenuSVG;
