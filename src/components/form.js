import React from "react";
import { connect } from "react-redux";
import { addTodo } from '../js/actions/create_todo';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ''
    };
  }

  handleTextChange = e => {
    this.setState({text: e.target.value});
  }

  handleClick = () => {
    const { text } = this.state;
    this.props.addTodo(text);
    this.setState({ text: '' });
  }

  render(){
    return(
      <div>
        <input value={this.state.text} onChange={this.handleTextChange} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Form);;