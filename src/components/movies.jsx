import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies);

  const handleDelete = (movie) => {
    const film = movies.filter((m) => m._id !== movie._id);
    setMovies(film);
  };

  return (
    <div>
      <h3 className="mb-5">Total {movies.length} Movies Found ... </h3>
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
