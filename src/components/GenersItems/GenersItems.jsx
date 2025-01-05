import React, { useContext } from 'react'
import { ContextStore } from '../Context/ContextStore'
import style from './../GenersItems/GenersItems.module.css'

const GenersItems = () => {
  const { gener, setGener } = useContext(ContextStore)
  return (
      <div className={style.gener_box}>
        <div className={gener == 'All' ? `${style.outline}` : ``} onClick={() => setGener('All')}>All</div>
        <div className={gener == 'Drama' ? `${style.outline}` : ``} onClick={() => setGener('Drama')}>Drama</div>
        <div className={gener == 'Action' ? `${style.outline}` : ``} onClick={() => setGener('Action')}>Action</div>
        <div className={gener == 'Comedy' ? `${style.outline}` : ``} onClick={() => setGener('Comedy')}>Comedy</div>
        <div className={gener == 'Romance' ? `${style.outline}` : ``} onClick={() => setGener('Romance')}>Romance</div>
        <div className={gener == 'Thriller' ? `${style.outline}` : ``} onClick={() => setGener('Thriller')}>Thriller</div>
        <div className={gener == 'War' ? `${style.outline}` : ``} onClick={() => setGener('War')}>War</div>
        <div className={gener == 'Family' ? `${style.outline}` : ``} onClick={() => setGener('Family')}>Family</div>
        <div className={gener == 'Sci-Fi' ? `${style.outline}` : ``} onClick={() => setGener('Sci-Fi')}>Sci-Fi</div>
        <div className={gener == 'Adventure' ? `${style.outline}` : ``} onClick={() => setGener('Adventure')}>Adventure</div>
        <div className={gener == 'Fantasy' ? `${style.outline}` : ``} onClick={() => setGener('Fantasy')}>Fantasy</div>
        <div className={gener == 'Crime' ? `${style.outline}` : ``} onClick={() => setGener('Crime')}>Crime</div>
        <div className={gener == 'Horror' ? `${style.outline}` : ``} onClick={() => setGener('Horror')}>Horror</div>
        <div className={gener == 'Biography' ? `${style.outline}` : ``} onClick={() => setGener('Biography')}>Biography</div>
        <div className={gener == 'Suspense' ? `${style.outline}` : ``} onClick={() => setGener('Suspense')}>Suspense</div>
        <div className={gener == 'Mystery' ? `${style.outline}` : ``} onClick={() => setGener('Mystery')}>Mystery</div>
        <div className={gener == 'Historical' ? `${style.outline}` : ``} onClick={() => setGener('Historical')}>Historical</div>
      </div>
  )
}

export default GenersItems
