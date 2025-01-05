import React, { useContext } from 'react'
import Slider from './../MovieSlider/MovieSlider.module.css'
import { ContextStore } from '../Context/ContextStore';
import { Link } from 'react-router';

const MovieSlider = ({ from, to, heading }) => {
    const { all_Movies } = useContext(ContextStore);
    return (
        <div className={Slider.container}>
            <h1>{heading}</h1>
            <div className={Slider.main}>
                {
                    all_Movies.map((item, i) => {
                        if (i > from && i < to) {
                            return (
                                <div key={i} className={Slider.scroll}>
                                    <Link to={`trailer/${item.id}`}>
                                        <img src={item.movieImageUrl} alt="" />
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default MovieSlider
