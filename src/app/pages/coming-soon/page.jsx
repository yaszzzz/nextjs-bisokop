import Link from "next/link";
import styles from "../../styles/ComingSoonPage.module.css";

export default function ComingSoon() {
  const movies = [
    {
      title: "Movie Title 1",
      releaseDate: "December 1, 2024",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+1",
      id: 1
    },
    {
      title: "Movie Title 2",
      releaseDate: "December 15, 2024",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+2",
      id: 2
    },
    {
      title: "Movie Title 3",
      releaseDate: "January 10, 2025",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+3",
      id: 3
    },
    {
      title: "Movie Title 4",
      releaseDate: "January 24, 2025",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+4",
      id: 4
    },
    {
      title: "Movie Title 5",
      releaseDate: "February 5, 2025",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+5",
      id: 5
    },
    {
      title: "Movie Title 6",
      releaseDate: "February 20, 2025",
      img: "https://via.placeholder.com/300x400.png?text=Movie+Poster+6",
      id: 6
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.comingSoonContainer}>
        <h1>Coming Soon</h1>
        <p>
          Get ready for the latest films that will be coming to theaters soon.
          Don’t miss out on these upcoming releases!
        </p>
        <div className={styles.comingSoonGrid}>
          {movies.map((movie, index) => (
            <Link href={`/pages/coming-soon/${movie.id}`}>
            <div className={styles.comingSoonItem} key={index}>
              <img src={movie.img} alt={`Poster of ${movie.title}`} />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.releaseDate}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
