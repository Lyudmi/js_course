import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onToggle}
        style={{ textDecoration: this.props.completed ? 'line-through' : '' }}
      >
        { this.props.value }
      
      </div>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func,
};

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = { list: [] };
  }

  onItemAdd(e) {
    if (e.keyCode === 13 && e.target.value.length) {
      this.setState({
        list: this.state.list.concat({
          value: e.target.value,
          id: Math.random(),
          completed: false,
        }),
      });

      e.target.value = '';
    }
  }

  onCompletedToggle(id) {
    const result = this.state.list.filter(item => item.id === id)[0];

    if (result) {
      result.completed = !result.completed;

      this.setState({ list: this.state.list });
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.onItemAdd.bind(this)} />
        {
          this.state.list.map((item) => (
            <TodoItem
              id={item.id}
              value={item.value}
              completed={item.completed}
              onToggle={this.onCompletedToggle.bind(this, item.id)}
              key={item.id}
            />
          ))
        }
        {
          this.state.list.filter(item => !item.completed).length
        }
      </div>
    );
  }
}





    
ReactDOM.render(
  <TodoApp />,
            document.getElementById('root')
);
  