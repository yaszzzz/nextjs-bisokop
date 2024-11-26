import React from 'react';
import MovieTrailer from '../../components/MovieTrailler';

export default function HomePage() {
  return (
    <div>
      <MovieTrailer
        title="Wakanda Forever"
        trailerImage="https://via.placeholder.com/400x250"
        description="Queen Ramonda, Shuri, M'Baku, Okoye, and the Dora Milaje fight to protect their nation..."
        director="Ryan Coogler"
        runtime="161 Minutes"
        releaseDate="November 11, 2022"
        cast="Angela Bassett, Letitia Wright, Winston Duke"
        posters={[
          "https://via.placeholder.com/100x150",
          "https://via.placeholder.com/100x150",
        ]}
      />
    </div>
  );
}
