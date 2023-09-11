import { useState } from "react"
import FetchFilms from "./FetchFilms"
import styles from "./index.module.css"

export default function FilmSearch({}) {
    const
        [films, setFilms] = useState(null),
        [error, setError] = useState(null),
        [value, setValue] = useState(),
        onClick = async () => {
            async function f() {
                try {
                    const
                        response = await fetch("https://www.omdbapi.com/?apikey=a2b07930&s=" + value);
                    if (!response.ok) throw new Error('fetch ' + response.status);
                    setFilms(await response.json());
                } catch (err) {
                    setError(err);
                }
            }; 
            f();
        };
    return (
        <>
            <div className={styles.cent}>
                <input value={value} className={styles.inp} onInput={evt => setValue(evt.target.value)} />
                <button className={styles.btn} onClick={onClick}>Поиск</button>
                <FetchFilms films={films} error={error} />
            </div>
        </>
    )
}