import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { todos: state.todos };
};

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, idx) => (
      <li key={idx}>
        {todo}
      </li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(TodoList);;