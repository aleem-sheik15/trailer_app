import { useContext } from 'react'
import style from './../MovieInfo/MovieInfo.module.css'
import { ContextStore } from '../Context/ContextStore'

const MovieInfo = ({ trailer }) => {
    const { duration } = useContext(ContextStore);
    return (
        <div className={style.container}>
            <div className={style.m_info}>
                <h2>{trailer.movieTitle}</h2>
                <div className={style.m_desc}>
                    <p>{trailer.releaseYear}</p>
                    <div className={style.ua}>
                        U/A 13+
                    </div>
                    {/* <p>Duration {(Math.abs(duration) / 60).toFixed(2)}sec</p> */}
                    <div className={style.hd}>
                        HD
                    </div>
                </div>
                <div className={style.lang}>
                    <i className='fa-solid fa-play'></i><p>Telugu</p>
                </div>
            </div>
            <div className={style.icons}>
                <ul>
                    <li><i className='fa-solid fa-plus'></i>List</li>
                    <li><i className='fa-regular fa-thumbs-up'></i>Like</li>
                    <li><i className='fa-solid fa-share'></i>Share</li>
                    <li><i className='fa-solid fa-flag'></i>Report</li>
                </ul>
                <h4>{trailer.description}</h4>
            </div>
            <div className={style.desc}>
                <h3>Movie Information</h3>
                <div className={style.rows}>
                    <label>Movie</label>
                    <p>{trailer.movieTitle}</p>
                </div>
                <div className={style.rows}>
                    <label>Cast</label>
                    <p>{trailer.heroName},{trailer.heroinName}</p>
                </div>
                <div className={style.rows}>
                    <label>Gener</label>
                    <p>{trailer.Genre}</p>
                </div>
                <div className={style.rows}>
                    <label>Release Year</label>
                    <p>{trailer.releaseYear}</p>
                </div>
                <div className={style.rows}>
                    <label>IMDB Rating</label>
                    <p>{trailer.movieRating}<i className="fa-regular fa-star"></i></p>
                </div>

            </div>
        </div>
    )
}

export default MovieInfo
