import styles from "../../styles/TheatersPage.module.css";

export default function Theaters() {
  const theaters = new Array(9).fill("Foto Theaters");
  const advertisementSrc =
    "https://via.placeholder.com/800x200.png?text=Iklan+Lamborghini";

  return (
    <div className={styles.container}>
      <div className={styles.theaterContainer}>
        <h1>Theaters</h1>
        <p>
          Indonesia's top online cinemas offer more than three thousand films
          for viewing, including new releases and premieres.
        </p>

        {/* Theater Grid */}
        <div className={styles.theaterGrid}>
          {theaters.map((item, index) => (
            <div className={styles.theaterItem} key={index}>
              {item}
            </div>
          ))}
        </div>

        {/* Advertisement Section */}
        <div className={styles.advertisement}>
          <img src={advertisementSrc} alt="Advertisement" />
        </div>
      </div>
    </div>
  );
}
