import React from 'react';
import P from 'prop-types';
import cx from 'classnames/bind';
import I from './todoItem.module.css';


const classes = cx.bind(I);


const TodoItem = ({
  title,
  id,
  completed,
  onClick,
  onRemoveClick,
}) => {
  const className = classes('title', {completed});
  return (
  <div className={I.item}>  
    <div 
      onClick={evt => onClick(evt, id)}
      className={className}
    >
      {title}
    </div>


    <button 
      className={I.btn}
      onClick={() => onRemoveClick(id)}>Delete
    </button>
  </div>
    )
  };

TodoItem.protoTypes = {
  title: P.string,
  id: P.string,
  completed: P.bool,
  onClick: P.func,
}


export default TodoItem;