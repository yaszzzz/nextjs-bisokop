import '../../styles/TheatersPage.module.css';

const NowShowing = () => {
  const movies = [
    {
      title: "Movie Title 1",
      genre: "Action, Adventure",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+1",
    },
    {
      title: "Movie Title 2",
      genre: "Drama, Thriller",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+2",
    },
    {
      title: "Movie Title 3",
      genre: "Comedy, Romance",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+3",
    },
    {
      title: "Movie Title 4",
      genre: "Sci-Fi, Fantasy",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+4",
    },
    {
      title: "Movie Title 5",
      genre: "Horror, Mystery",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+5",
    },
    {
      title: "Movie Title 6",
      genre: "Animation, Family",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+6",
    },
  ];

  return (
    <>
    <div className="container">
    <div className="now-showing-container">
      <h1>Now Showing</h1>
      <p>
        Catch the latest movies now playing in theaters. Check out the trailers
        and find a showtime near you!
      </p>
      {/* Now Showing Grid */}
      <div className="now-showing-grid">
        <div className="now-showing-item">
          <img
            src="https://via.placeholder.com/300x400.png?text=Movie+Poster+1"
            alt="Movie Poster 1"
          />
          <h3>Movie Title 1</h3>
          <p>Genre: Action, Adventure</p>
          <button className="trailer-button">Watch Trailer</button>
        </div>
        <div className="now-showing-item">
          <img
            src="https://via.placeholder.com/300x400.png?text=Movie+Poster+2"
            alt="Movie Poster 2"
          />
          <h3>Movie Title 2</h3>
          <p>Genre: Drama, Thriller</p>
          <button className="trailer-button">Watch Trailer</button>
        </div>
        <div className="now-showing-item">
          <img
            src="https://via.placeholder.com/300x400.png?text=Movie+Poster+3"
            alt="Movie Poster 3"
          />
          <h3>Movie Title 3</h3>
          <p>Genre: Comedy, Romance</p>
          <button className="trailer-button">Watch Trailer</button>
        </div>
        <div className="now-showing-item">
          <img
            src="https://via.placeholder.com/300x400.png?text=Movie+Poster+4"
            alt="Movie Poster 4"
          />
          <h3>Movie Title 4</h3>
          <p>Genre: Sci-Fi, Fantasy</p>
          <button className="trailer-button">Watch Trailer</button>
        </div>
        <div className="now-showing-item">
          <img
            src="https://via.placeholder.com/300x400.png?text=Movie+Poster+5"
            alt="Movie Poster 5"
          />
          <h3>Movie Title 5</h3>
          <p>Genre: Horror, Mystery</p>
          <button className="trailer-button">Watch Trailer</button>
        </div>
        <div className="now-showing-item">
          <img
            src="https://via.placeholder.com/300x400.png?text=Movie+Poster+6"
            alt="Movie Poster 6"
          />
          <h3>Movie Title 6</h3>
          <p>Genre: Animation, Family</p>
          <button className="trailer-button">Watch Trailer</button>
        </div>
      </div>
    </div>
  </div>
    
    </>
  );
};

export default NowShowing;
