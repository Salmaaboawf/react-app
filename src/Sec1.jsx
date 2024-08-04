
import React from 'react';
import meImage from './assets/salma.jpg';

function Sec1() {
  return (
    <div className="sec1">
      <div className="about">
        <h2 className='header'>About Me</h2>
        <p>
          A passionate front-end developer with extensive experience in creating and maintaining user-friendly websites. Skilled in utilizing modern web technologies and frameworks such as React, Vue.js, and WordPress. Committed to continuous learning and staying up-to-date with industry trends to deliver high-quality, efficient, and visually appealing web solutions.
        </p>
      </div>
      <div className="img">
        <img src={meImage} alt="Salma Hamed" />
        <h1>HELLO</h1>
      </div>
    </div>
  );
}

export default Sec1;

