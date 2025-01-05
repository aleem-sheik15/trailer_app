import React from 'react'
import Hero from '../Hero/Hero'
import MovieSlider from '../MovieSlider/MovieSlider'
import MovieCard from '../MovieCards/MovieCard'
import home from './../Pages/CSS/Home.module.css'
import Download from '../Download/Download'
import Description from '../Description/Description'

const Home = () => {
  return (
    <div className={home.container}>
      <Hero />
      <MovieSlider from={12} to={24} heading={'Latest movies'} />
      <MovieCard from={0} to={12} heading={'Movie Mirchi'} />
      <Description />
      <MovieSlider from={24} to={36} heading={'Blockbusters'} />
      <MovieCard from={36} to={48} heading={'Most Viewed'} />
      <Download />
    </div>
  )
}

export default Home
