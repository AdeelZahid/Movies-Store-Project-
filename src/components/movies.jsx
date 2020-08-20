import React, { Component  } from "react";
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { getMovies } from "../services/fakeMovieService";
import {getGenres} from '../services/fakeGenreService';
import {Paginate} from '../utils/paginate';
import _ from 'lodash';


class Movies extends Component {

  state = {
    movies: [],
    genres: [], 
    pageSize: 4,
    currentPage: 1,
    sortColumn: {path: 'title', order: 'asc'}
  }
  
  componentDidMount() {
    const allGenres = [{ _id: " ", name: "All Genres"}, ...getGenres()]
    this.setState({movies: getMovies(), genres: allGenres });
  }

   handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({movies});
  };
 
   handleLike= (movie) =>{
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  };

   handlePageChange = page => {
    this.setState({currentPage: page})
  }

  handleGenreSelect = genre => {
    console.log(genre);
    this.setState({selectedGenre : genre, currentPage: 1})
  }
 
  handleSort = (path) => {
    console.log(path);

    const sortColumn = {...this.state.sortColumn}
    if(sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    else{
      sortColumn.path = path;
      sortColumn.order = 'asc'
    }

    this.setState({sortColumn})
  }

render() {

  const {length: count} = this.state.movies;
  const {pageSize, currentPage, selectedGenre, sortColumn, movies: allMovies} = this.state;

  if (count === 0) return <h4> There are no movies in database</h4>

  const filtered = selectedGenre  &&  selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
                : allMovies;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

  const movies = Paginate(sorted, currentPage, pageSize);

  return (
      
    <div className="container">
    
    <h3 className="mb-5">Total {filtered.length} Movies Found in the database... </h3>
    <div className="row">
      
      <div className="col-2">
        <ListGroup 
          items={this.state.genres} 
          selectedItem = {this.state.selectedGenre}
          onItemSelect={this.handleGenreSelect}
        />
      </div>
      
      <div className="col-10">
        
        <MoviesTable 
          movies={movies}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
        
        <Pagination 
          itemCount={filtered.length} 
          pageSize={pageSize} 
          onPageChange={this.handlePageChange} 
          currentPage= {currentPage}
        />

      </div>
    </div>
  </div>
);
}

 
};

export default Movies;
