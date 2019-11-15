import React from "react";
import CabbiLogo from './CabbiLogo.png'
import './CabbiHeader.css'

const CabbiHeader = () => (
  <div className='cabbiHaderContainer'>
    <a className='cabbiLogoContainer' href='https://cabbi.bio/'>
      <img className='cabbiLogo' src={CabbiLogo} alt='Cabbi Logo' />
    </a>
  </div>
);

export default CabbiHeader;
