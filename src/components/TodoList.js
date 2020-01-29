import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit, identify } = this.props;
    
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-uppercase text-center">
            Agendamentos
          </h3>
          
          {
            items.map(item => {
              return <TodoItem 
              key={item.id} 
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              identify={item.id}
              />;
            })
            
          }
          
          <button type="button" className="btn btn-danger btn-block 
          text-capitalize mt-5"
          onClick={clearList}
          >
            Limpar lista
          </button>
        </ul>
      </div>
    );
  }
}
