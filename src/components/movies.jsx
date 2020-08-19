import React, { Component  } from "react";
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from "../services/fakeMovieService";
import {Paginate} from '../utils/paginate';


class Movies extends Component {

  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
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
    // setMovies(moviess);
    this.setState({movies});
  };

   handlePageChange = page => {
    // setCurrentPage({currentPage: page})
    this.setState({currentPage: page})
  }

 

render() {

  const {length: count} = this.state.movies;
  const {pageSize, currentPage, movies: allMovies} = this.state;

  if (count === 0) return <h4> There are no movies in database</h4>
  const movies = Paginate(allMovies, currentPage, pageSize);

  return (
      
    <div>
    
    <h3 className="mb-5">Total {count} Movies Found ... </h3>
    <div className="row">
      <div className="col-2"></div>
      <div className="col-10">
        
        <table className="table">

          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th ></th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)}/></td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => {this.handleDelete(movie);}}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <Pagination 
          itemCount={count} 
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
