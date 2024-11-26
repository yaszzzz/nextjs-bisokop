import React from 'react';
import '../styles/MoviePageTrailler.css';

export default function MovieTrailer({
  title,
  trailerImage,
  description,
  director,
  runtime,
  releaseDate,
  cast,
  posters,
}) {
  return (
    <div>
      {/* Hero Section */}
      <section className="movie-hero">
        <h1>{title}</h1>
      </section>

      {/* Main Content */}
      <section className="movie-content">
        {/* Trailer Section */}
        <div className="trailer-section">
          <h2>Watch Trailer</h2>
          <img src={trailerImage} alt="Trailer Thumbnail" />
        </div>

        {/* Details Section */}
        <div className="details-section">
          <h2>Overview</h2>
          <p>{description}</p>
          <div className="movie-info">
            <strong>Director:</strong> {director}
          </div>
          <div className="movie-info">
            <strong>Running Time:</strong> {runtime}
          </div>
          <div className="movie-info">
            <strong>Release Date:</strong> {releaseDate}
          </div>
          <div className="movie-info">
            <strong>Cast:</strong> {cast}
          </div>
          <button className="btn-ticket">Beli Tiket Sekarang</button>
        </div>

        {/* Poster Section */}
        <div className="poster-section">
          <h3>Posters</h3>
          <div className="poster-grid">
            {posters.map((poster, index) => (
              <img key={index} src={poster} alt={`Poster ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
