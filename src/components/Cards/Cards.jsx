import { Link } from 'react-router'
import style from '../Cards/Cards.module.css'

const Cards = ({ item, releaseYear }) => {

    return (
        <div className={style.card}>
            <Link to={`/trailer/${item.id}`}>
                <img src={item.movieImageUrl} />
            </Link>
            <div className={style.card_body}>
                <p>{item.movieTitle}</p>
                {releaseYear ? <p className={style.year}>{releaseYear}</p> : <></>}
            </div>
        </div>
    )
}

export default Cards