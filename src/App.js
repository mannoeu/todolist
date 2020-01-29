import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  /* state */
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  /* captura do valor do input sempre que mudar */
  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  };

  /* envio do formulário */
  handleSubmit = (event) => {
    event.preventDefault();
    /* novo item */
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    /* adicionando o novo item no array do state */
    const updateItems = [...this.state.items, newItem];

    /* passando o novo array */
    this.setState({
      items: updateItems,
      item: '',
      id: uuid(),
      editItem: false
    });
  };

  /* apagar todas as consultas  ARRUMAR*/
  clearList = () => {
    this.setState({
      items: [],
    });
  };

  /* apagar um registro */
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  /* Editar registro */

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  }

  /* renderização */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-0 mx-auto col-md-8 mt-4">
            <h3 className="text-uppercase text-center">Entrar na fila</h3>
            <TodoInput item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              identify={this.state.items.id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
