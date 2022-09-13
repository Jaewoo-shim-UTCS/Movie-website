import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const response = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setDetail(response);
    }
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line 
    }, [])
    return (
        <div>
            {loading ?
                (<div className={styles.loader}>
                    <span>Loading...</span>
                </div>) : (
                    <div className={styles.page}>
                        <div className={styles.title}>
                            <h2>{detail.data.movie.title}</h2>
                            <h4>{`${detail.data.movie.year} • 
                            ${Math.floor(detail.data.movie.runtime / 60)}h 
                            ${detail.data.movie.runtime % 60}m`}</h4>
                        </div>
                        <div className={styles.details}>
                            <div>
                                <img src={detail.data.movie.medium_cover_image} alt={detail.data.movie.title} />
                            </div>
                            <div className={styles.description}>
                                <table className={styles.genres}>
                                    <tbody>
                                        <tr>
                                            {detail.data.movie.genres.map((genre, index) =>
                                                <th className={styles.genre} key={index}>{genre}</th>
                                            )}
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    {detail.data.movie.description_full}
                                </p>
                                <p>
                                    {`IMDb: ⭐${detail.data.movie.rating}/10`}
                                    <br/>
                                    {`Language: ${detail.data.movie.language.toUpperCase()}`}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Detail;