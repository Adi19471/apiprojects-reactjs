import React, { useState } from "react";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=f6bb792a`
      );

      const data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
   
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center ">
            <div className="form-group d-flex">
              <form onSubmit={handleSubmit}>
                <label htmlFor="">Search any Movies...</label>
                <input
                  type="text"
                  placeholder="RRR, PUSHPHA, DHOOM"
                  value={search.toLocaleUpperCase()}
                  className="form-control"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-info">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
        <div className="row">
    
          {
        
      movies &&
            movies.map((movie, index) => {
              return (
                <>
                  <div key={index} className="col-sm-4 card mt-3 bg-info p-5 shadow-lg blinking">
                    <div
                      
                      className="card"
                      style={{ width: "18rem" }}
                    >
                      <img
                        src={movie.Poster}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text">{movie.Title}</p>

                        <p>{movie.Type}</p>
                        <p>{movie.Year}</p>
                        <p>{movie.imdbID}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }

         
        </div>

    </>
  );
};

export default Movies;
