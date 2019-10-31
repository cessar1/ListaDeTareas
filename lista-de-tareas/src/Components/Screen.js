import React, { Component } from "react";
import Card from "./Card";
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    this.setState({
      input: "",
      todos: [...this.state.todos, this.state.input]
    });

    event.preventDefault();
  }
  deleteTask(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Listado de tareas</h1>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Tarea"
          />
          <button disabled={this.state.input.length <= 0} type="submit">
            Agregar tarea
          </button>
        </form>
        {this.state.todos.map((todo, i) => (
          <Card
            onDeleteTask={this.deleteTask.bind(this, i)}
            task={todo}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default Screen;
