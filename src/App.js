import React  from 'react';
import './App.scss';
import TodoList from './components/todo_list';
import Form from './components/form';

export default
class App extends React.Component {
  render() {
    return(
      <div>
        <TodoList />
        <Form />
      </div>
    );
  }
}
