import React from 'react'
import GenersItems from '../GenersItems/GenersItems'
import GenerCard from '../GenerCard/GenerCard'
import style from '../Pages/CSS/Geners.module.css'

const Geners = () => {
  return (
    <div className={style.container}>
      <GenersItems/>
      <GenerCard/>
    </div>
  )
}

export default Geners
