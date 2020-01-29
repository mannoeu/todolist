import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control text-capitalize"
            placeholder="digite seu nome"
            value={item}
            onChange={handleChange}
            />
            <button type="submit" 
          className={
            editItem ? "btn btn-success btn-block text-capitalize c-pointer mt-4"
            : "btn btn-primary btn-block text-capitalize c-pointer mt-4"
          }>
           {editItem ? "Salvar" : "Cadastrar"}
          </button>
          </div>
        </form>
      </div>
    );
  }
}

/*

<div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" className="input form-control text-capitalize"
            placeholder="digite seu nome"
            value={item}
            onChange={handleChange}
            />
          </div>
          <button type="submit" 
          className={
            editItem ? "btn btn-block btn-success text-capitalize my-3"
            : "btn btn-block btn-primary text-capitalize my-3"
          }>
           {editItem ? "Salvar" : "Cadastrar"}
          </button>
        </form>
      </div>

*/

