import React, {Component} from 'react';

import Header from './components/Header/Header';
import Input from './components/inputTodo/inputTodo';
import TodoList from './components/TodoList/todoList';
import Sidebar from './components/Routing/routing';
import g from'./App.module.css';

import { createTodo } from './utils/create';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
    };


    // add() {
    //   var title = this.refs.title.value;
    //   if (localStorage.getItem('todos') == null) {
    //     var todos = [];
    //     todos.push(title);
    //     localStorage.setItem('todos', JSON.stringify(todos));
    //   } else {
    //     var todos = JSON.parse(localStorage.getItem('todos'));
    //     todos.push(title);
    //     localStorage.setItem('todos', JSON.stringify(works));
    //   }
    //   this.setState({
    //     todos: JSON.parse(localStorage.getItem('todos'))
    //   })
    // }





    this.onChangeInputText = this.onChangeInputText.bind(this);
    this.hendleAddTodo = this.hendleAddTodo.bind(this);
    this.hendleTodoClick = this.hendleTodoClick.bind(this);
    this.hendleTodoRemoveClick = this.hendleTodoRemoveClick.bind(this);
  }

  onChangeInputText(inputValue) {
    this.setState({inputValue});
  }

  hendleAddTodo() {
    const { inputValue } = this.state;
    if (inputValue.trim().length === 0) {
      return;
    }

    const todo = createTodo (this.state.inputValue);
    this.setState({
      inputValue: '',
      todos: [todo].concat(this.state.todos),
    });
    
    // add() => {
    //   var title = this.refs.title.value;
    //   if (localStorage.getItem('todos') == null) {
    //     var todos = [];
    //     todos.push(title);
    //     localStorage.setItem('todos', JSON.stringify(todos));
    //   } else {
    //     var todos = JSON.parse(localStorage.getItem('todos'));
    //     todos.push(title);
    //     localStorage.setItem('todos', JSON.stringify(todos));
    //   }
    //   this.setState({
    //     todos: JSON.parse(localStorage.getItem('todos'))
    //   })
    // }


  }
  hendleTodoClick(evt, id) {
    const currentTodoIndex = this.state.todos.findIndex(i => i.id === id);

    if (currentTodoIndex === -1) {
      return;
    }
    const todo = { ...this.state.todos[currentTodoIndex] };
    todo.completed = !todo.completed;
    const newTodos = [ ...this.state.todos];
    newTodos[currentTodoIndex] = todo;

    this.setState({
      todos: newTodos,
    });
  }
  hendleTodoRemoveClick(id) {
    this.setState({
      todos: this.state.todos.filter(i => i.id !== id),
    });
  }

  render() {
    return (
      <div className={g.app}>
        <Header />
        <Sidebar />
        <Input 
          value={this.state.inputValue}
          onChangeText={this.onChangeInputText}
          onClick={this.hendleAddTodo}
        />
        <TodoList 
          id="List"
          items={this.state.todos}
          onTodoClick={this.hendleTodoClick}
          onTodoRemoveClick={this.hendleTodoRemoveClick}
        />
      </div>
    );
  }
}

export default App;