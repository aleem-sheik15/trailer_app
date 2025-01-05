import React from 'react'
import style from './../CaroselItem/CaroselItem.module.css'

const CaroselItem = ({ item }) => {
    return (
        <div className={style.inner_container}>
            <img src={item.movieMainImg} alt="" />
            <div className={style.itemDetails}>
                <h1>{item.movieTitle}</h1>
                <h3>{item.description}</h3>
            </div>
        </div>
    )
}

export default CaroselItem
