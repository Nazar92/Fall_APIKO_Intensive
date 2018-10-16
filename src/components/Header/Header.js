import React from 'react';
import h from './Header.module.css';

const Header = ({
  value,
  onclick,
  onChangeText,
}) => (
  <div className={h.header}>
    <h2>My first react todos</h2>        
  </div>
)


export default Header;