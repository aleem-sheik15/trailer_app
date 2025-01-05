import React, { useContext } from 'react'
import style from './../GenerCard/GenerCard.module.css'
import { ContextStore } from './../Context/ContextStore'
import Cards from '../Cards/Cards'

const GenerCard = () => {

    const { all_Movies, gener } = useContext(ContextStore);

    return (
        <div className={style.container}>
            {
                all_Movies.map((item, i) => {
                    if (gener === 'All') {
                        return (
                            <Cards key={i} item={item} />
                        )
                    }
                    if (item.Genre.includes(gener)) {
                        return (
                            <Cards key={i} item={item} />
                        )
                    }
                })
            }
        </div>
    )
}

export default GenerCard
