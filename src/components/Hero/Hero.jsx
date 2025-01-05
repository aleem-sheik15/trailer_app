import style from './Hero.module.css'
import { useContext, useEffect, useState } from "react";
import { ContextStore } from './../Context/ContextStore';
import CaroselItem from '../CaroselItem/CaroselItem';

const Hero = () => {
  const { all_Movies } = useContext(ContextStore);
  const [caroselItems, setCaroselITems] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (caroselItems >= 4) {
        setCaroselITems(0);
      } else {
        setCaroselITems(caroselItems + 1);
      }
    }, 5000)
  }, [caroselItems])
  return (
    <div className={style.container}>
      {
        all_Movies.map((item, i) => {
          if (i == caroselItems) {
            return (
              <CaroselItem item={item} key={i} />
            )
          }
        })
      }
    </div>
  )
}

export default Hero
