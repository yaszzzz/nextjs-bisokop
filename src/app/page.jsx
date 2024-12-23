"use client";
import Link from "next/link";
import MovieCarousel from "./components/CarousellHeroContent";
import MovieGrid from "./components/NowShowing";

export default function Home() {
const newRellease = ['Fast X', 'Air','film','yeflou','jejutsu kaisen','Fast And Furios']


  return (
        <div>
            {/* Hero Section */}
            <MovieCarousel />

            {/* Now Showing Section */}
            <a href="/pages/now-showing" className="anchor">
                <h2 className="section-title">Now Showing</h2>
            </a>
            <MovieGrid />

            {/* Coming Soon Section */}
            <h2 className="section-title">Coming Soon</h2>
            <Link href="/pages/movie-page-trailler">
            <div className="movie-grid">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className="movie-item">
                        <img src="https://via.placeholder.com/150x200" alt={`Movie ${index % 2 + 3}`} />
                        <div className="movie-title">Movie Title {index % 2 + 3}</div>
                        <div className="movie-description">110 Menit</div>
                    </div>
                ))}
            </div>
            </Link>

            {/* New Releases Section */}
            <h2 className="nonton-section-title">New Releases</h2>
            <div className="nonton-movie-grid">
                {newRellease.map((title, index) => (
                    <div key={index} className="nonton-movie-card">
                        <img src="https://via.placeholder.com/200x300" alt={title} />
                        <div className="nonton-movie-info">
                            <div className="nonton-movie-title">{title}</div>
                            <div className="nonton-movie-details">2023 | {index % 2 === 0 ? 'Action' : 'Drama'} | 2h 21m</div>
                            <div className="nonton-movie-director">Director: {index % 2 === 0 ? 'Louis Leterrier' : 'Ben Affleck'}</div>
                        </div>
                        <div className="nonton-movie-actions">
                            <a href="#" className="nonton-trailer-btn">Trailer</a>
                            <span className="nonton-icon">❤️</span>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
  );
}    
