import React from "react";
import { connect } from "react-redux";

const mapStateToProps = store => {
  return { todos: store.todos };
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

export default connect(mapStateToProps)(TodoList);