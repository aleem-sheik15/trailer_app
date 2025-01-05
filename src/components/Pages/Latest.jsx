import { useContext } from 'react'
import style from './../Pages/CSS/Latest.module.css'
import { ContextStore } from '../Context/ContextStore'
import Cards from './../Cards/Cards'

const Latest = () => {
  const { all_Movies } = useContext(ContextStore);

  return (
    < div className={style.container}>
      <h1>Latest</h1>
      <div className={style.latest_container}>
        {
          all_Movies.map((item, i) => {
            if (2024 === item.releaseYear) {
              return (
                <Cards releaseYear={item.releaseYear} key={i} item={item} />
              )
            }
          })
        }
      </div>
    </div>

  )
}

export default Latest
