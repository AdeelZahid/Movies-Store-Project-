import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from './common/like';


const Movies = () => {
  
  const [movies, setMovies] = useState(getMovies);

  const handleDelete = (movie) => {
    const film = movies.filter((m) => m._id !== movie._id);
    setMovies(film);
  };
 
  const handleLike= (movie) =>{
    const moviess = [...movies];
    const index = movies.indexOf(movie);
    moviess[index] = {...moviess[index]};
    moviess[index].liked = !moviess[index].liked;
    setMovies(moviess);
  };

  const {length: count} = movies;

if (count === 0) return <h4> There are no movies in database</h4> 

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
                  <td><Like liked={movie.liked} onClick={()=>handleLike(movie)}/></td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => {handleDelete(movie);}}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Movies;
