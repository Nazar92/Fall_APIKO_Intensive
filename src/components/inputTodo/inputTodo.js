import React from 'react';
import P from 'prop-types';
import I from './inputTodo.module.css';

const Input = ({
  value,
  onClick,
  onChangeText,
}) => (
  <div>        
    <input 
      className={I.inputTodo} 
      value={value}
      onChange={evt => onChangeText(evt.target.value)}
    />
    <button 
      className={I.inputBTN}
      onClick={onClick}
    >
        Add
    </button>
  </div>
)
     


Input.propTypes = {
  value: P.string,
  onClick: P.func, 
  onChangeText: P.func,
}
    
export default Input;