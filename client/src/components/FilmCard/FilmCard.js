import React from 'react';

import {Card} from './styled';
export const FilmCard = ({handleDeleteFilm, id, title, releaseYear, format, stars}) => {

    const handleClick = () => {
        handleDeleteFilm(id)
    }

    return <Card>
        <p>Title: {title}</p>
        <p>release year: {releaseYear}</p>
        <p>format: {format}</p>
        <p>stars: {stars}</p>
        <button onClick={handleClick}>DELETE</button>
    </Card>
}