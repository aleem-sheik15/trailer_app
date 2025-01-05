import React from 'react'
import { Link } from 'react-router'
import style from './../BreadCums/BreadCums.module.css'

const BreadCums = ({trailerName}) => {
    
  return (
    <div className={style.container}>
      <p><Link to={'/'}>Home</Link>/<span>Trailer</span>/<span>{trailerName}</span></p>
    </div>
  )
}

export default BreadCums