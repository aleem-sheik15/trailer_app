import { useContext } from 'react'
import { ContextStore } from '../Context/ContextStore'
import Cards from '../Cards/Cards'
import mcard from './MovieCards.module.css'

const MovieCard = ({ from, to, heading }) => {
    const { all_Movies } = useContext(ContextStore);
    return (
        <div className={mcard.container}>
            <h1>{heading}</h1>
            <div className={mcard.card_container}>
                {
                    all_Movies.map((item, i) => {
                        if (i >= from && i < to) {
                            return (
                                <Cards item={item} key={i} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default MovieCard
