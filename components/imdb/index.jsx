import { useState } from "react"
import FetchFilms from "./FetchFilms"
import styles from "./OneFilm.module.css"

export default function FilmSearch({}) {
    const
        [value, setValue] = useState() 
    return (
        <>
            <div className={styles.cent}>
                <input value={value} className={styles.inp} onInput={evt => setValue(evt.target.value)} />
                <FetchFilms search={value} />
            </div>
        </>
    )
}