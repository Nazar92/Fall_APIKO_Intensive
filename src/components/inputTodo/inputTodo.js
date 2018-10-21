import React from 'react';
import P from 'prop-types';
import I from './inputTodo.module.css';

// class toDo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todoss: []
//     };
//   }
  
//   add() {
//     var title = this.refs.title.value;
//     if (localStorage.getItem('todoss') == null) {
//       var todoss = [];
//       todoss.push(title);
//       localStorage.setItem('todoss', JSON.stringify(todoss));
//     } else {
//       var todoss = JSON.parse(localStorage.getItem('todoss'));
//       todoss.push(title);
//       localStorage.setItem('todoss', JSON.stringify(todoss));
//     }
//     this.setState({
//       todoss: JSON.parse(localStorage.getItem('todoss'))
//     })
//   }
// }




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
      // onClick={this.add.bind(this)}
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