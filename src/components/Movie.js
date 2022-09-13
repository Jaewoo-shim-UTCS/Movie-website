import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.cover} />
      <div className={styles.explanation}>
        <h2 className={styles.title}><Link to={`movie/${id}`}>{title}</Link></h2>
        <h3 className={styles.year}>{year}</h3>
        <p>{summary.length > 110 ? `${summary.slice(0, 110)}...` : summary}</p>
        {summary.length > 110 ? <Link to={`movie/${id}`}>...Read all</Link> : null}
        <ul className={styles.genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>))}
        </ul>
      </div>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;