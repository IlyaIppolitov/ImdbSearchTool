import styles from './OneFilm.module.css'

export default function OneFilm({film}) {
  let {
    Title, Year, Poster
  } = film;
  return (
    <>
      <div className={styles.mar}>
        <div className={styles.text}>{Title + " " + Year}</div>
        <img src={Poster} />
      </div>
    </>
  )
}