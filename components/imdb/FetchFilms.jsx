import { useState } from "react"
import OneFilm from "./OneFilm"

export default function FetchFilms({ films, error }) {

    if (error) return <>Error = {error}</>
    if (films) {
        let {
            Search
        } = films; 

        return <>{Search.map((film) => <OneFilm  key={film.imdbID} film={film} />)}Поиск</>
    }

    return <></>
}