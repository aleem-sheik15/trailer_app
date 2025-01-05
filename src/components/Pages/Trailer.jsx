import { useContext } from 'react'
import BreadCums from '../BreadCums/BreadCums'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { ContextStore } from '../Context/ContextStore'
import { useParams } from 'react-router'
import style from './../Pages/CSS/Trailer.module.css'
import MovieInfo from '../MovieInfo/MovieInfo'

const Trailer=()=> {
  const { all_Movies } = useContext(ContextStore)
  const { trailerId } = useParams();
  const trailer = all_Movies.find(e => e.id === Number(trailerId))
  return (
    <div className={style.container}>
      <BreadCums trailerName={trailer.movieTitle} />
      <VideoPlayer trailer={trailer} />
      <MovieInfo trailer={trailer} />
    </div>
  )
}

export default Trailer
