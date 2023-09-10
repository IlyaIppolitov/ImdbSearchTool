import { useState } from "react"
import OneFilm from "./OneFilm"
import styles from "./OneFilm.module.css"

export default function FetchFilms({ search }) {
    const
        [films, setFilms] = useState(null),
        [error, setError] = useState(null),
        onClick = async () => {
            async function f() {
                try {
                    const
                        response = await fetch("https://www.omdbapi.com/?apikey=a2b07930&s=" + search);
                    if (!response.ok) throw new Error('fetch ' + response.status);
                    setFilms(await response.json());
                } catch (err) {
                    setError(err);
                }
            }; 
            f();
        };

    if (error) return <>Error = {error}</>
    if (films) {
        let {
            Search
        } = films; 

        return <>{Search.map((film) => <OneFilm  key={film.imdbID} film={film} />)}Поиск</>
    }

    return <><button className={styles.btn} onClick={onClick}>Поиск</button></>
}