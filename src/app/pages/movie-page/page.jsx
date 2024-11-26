import '../../styles/MoviePage.css'

export default function moviePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="movie-hero">
        <h1>JUDUL FILM</h1>
      </section>
      {/* Main Content */}
      <section className="movie-content">
        {/* Trailer Section */}
        <div className="trailer-section">
          <h2>Watch Trailer</h2>
          <img
            src="https://via.placeholder.com/400x250"
            alt="Trailer Thumbnail"
          />{" "}
          {/* Replace with trailer thumbnail */}
        </div>
        {/* Details Section */}
        <div className="details-section">
          <h2>Overview</h2>
          <p>
            Queen Ramonda, Shuri, M'Baku, Okoye, and the Dora Milaje fight to
            protect their nation...
          </p>
          <div className="movie-info">
            <strong>Director:</strong> Ryan Coogler
          </div>
          <div className="movie-info">
            <strong>Running Time:</strong> 161 Minutes
          </div>
          <div className="movie-info">
            <strong>Release Date:</strong> November 11, 2022
          </div>
          <div className="movie-info">
            <strong>Cast:</strong> Angela Bassett, Letitia Wright, Winston
            Duke...
          </div>
          <button className="btn-ticket">Beli Tiket Sekarang</button>
        </div>
        {/* Poster Section */}
        <div className="poster-section">
          <h3>Posters</h3>
          <div className="poster-grid">
            <img src="https://via.placeholder.com/100x150" alt="Poster 1" />
            <img src="https://via.placeholder.com/100x150" alt="Poster 2" />
          </div>
        </div>
      </section>
    </>
  );
}
