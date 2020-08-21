import React, { Component } from "react";
import Table from './common/table';
import Like from "./common/like";

class moviesTable extends Component {

  columns=[
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: "Like", content: movie=> <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />},
    {key: "Action", content:movie => <button className="btn btn-danger" onClick={() => { this.props.onDelete(movie); }}>  Delete </button>}
  ]

  render() {
    const { movies, onSort, sortColumn } = this.props;
    // console.log(movies);

    return (
      <div>
        <Table 
          columns={this.columns} 
          data={movies} 
          sortColumn={sortColumn}
          onSort={onSort}
         />
      </div>
    );
  }
}

export default moviesTable;
