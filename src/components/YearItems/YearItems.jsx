import React, { useContext } from 'react'
import { ContextStore } from './../Context/ContextStore'
import Cards from '../Cards/Cards';
import style from '../YearItems/YearItems.module.css'

const YearItems = () => {
    const { all_Movies, year, setYear } = useContext(ContextStore);
    return (
        <div className={style.container}>
            <div className={style.yearlist}>
                <div onClick={() => setYear(0)} className={year == 0 ? style.outline : ''}>All</div>
                <div onClick={() => setYear(2022)} className={year == 2022 ? style.outline : ''}>2022</div>
                <div onClick={() => setYear(2023)} className={year == 2023 ? style.outline : ''}>2023</div>
                <div onClick={() => setYear(2024)} className={year == 2024 ? style.outline : ''}>2024</div>
            </div>
            <div className={style.container_cards}>
                {
                    all_Movies.map((item, i) => {
                        if (item.releaseYear === year) {
                            return (
                                <Cards item={item} key={i} releaseYear={item.releaseYear} />
                            )
                        }
                        if (0 === year) {
                            return (
                                <Cards item={item} key={i} releaseYear={item.releaseYear} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default YearItems
