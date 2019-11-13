import React from "react";
import CabbiLogo from './CabbiLogo.png'
import './CabbiHeader.css'

const CabbiHeader = () => (
  <div className='headerContainer'>
    <a className='logoContainer' href='https://cabbi.bio/'>
      <img className='logo 'src={CabbiLogo} alt='Cabbi Logo' />
    </a>
  </div>
);

export default CabbiHeader;
