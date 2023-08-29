import React, { useState } from "react";

const Allfood = () => {
  const [search, setSearch] = useState("");
  const [api, setApi] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const YOUR_APP_ID = "4f2f8e4d";
    const YOUR_APP_KEY = "9bb4bdd1c30437901d2c62a7a4a549f6";

    try {
      const result = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&calories=591-722&health=alcohol-free`
      );

      if (result.ok) {
        const data = await result.json();

        setApi(data.hits);
        console.log(data.hits);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-12 card">
            <h1 className="text-info text-center">All Food Items Available</h1>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group d-flex">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control"
                  placeholder="Search for anything..."
                />
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row">
        <h3 className="text-center col-12">Search Any Item ...</h3>

        {api
          ? api.map((item, index) => (
              <div key={index} className="col-md-4 col-lg-3 mb-4">
                <div className="card">
                  <h5 className="card-title text-center">{item.recipe.label}</h5>
                  <img
                    src={item.recipe.image}
                    className="card-img-top"
                    alt="No image available"
                  />
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2">
                      Calories: {item.recipe.calories.toFixed(2)}
                    </h6>
                    <p className="card-text">
                      Diet Labels: {item.recipe.dietLabels.join(", ")}
                    </p>
                    <a href={item.recipe.url} className="btn btn-primary">
                      Source
                    </a>
                    <p>Total Weight: {item.recipe.totalWeight.toFixed(2)}</p>
                    <h5>{item.recipe.totalNutrients.CA.label}</h5>
                  </div>
                </div>
              </div>
            ))
          : <h4 className="text-warning">N data found here....</h4>
          }
      </div>
    </div>
    </>
  );
};

export default Allfood;
