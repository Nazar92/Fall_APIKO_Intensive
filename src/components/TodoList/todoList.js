import React from 'react';
import L from './todoList.module.css';
import TodoItem from '../TodoItem/todoItem';

const TodoList = ({
  items,
  onTodoClick,
  onTodoRemoveClick,
}) => (
  <ul className={L.list}>  
   {items.map(i => (
    <TodoItem 
      onRemoveClick={onTodoRemoveClick}
      onClick={onTodoClick}
      key={i.id} {...i} 
    
    /> ))}
  </ul>
)


export default TodoList;