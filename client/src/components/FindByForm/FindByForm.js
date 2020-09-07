import React, { useState } from 'react';

import {Container} from './styled';

export const FindByTitleForm = ({ type,  handleFindBy }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            setError(true);
            return;
        }
        handleFindBy(title);
        setError(false);
        setTitle('')

    }

    const handleChange = e => {
        setTitle(e.target.value)
    }
    return <Container>
        <h3>FIND BY {type}</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="findByTitle"></label>
            <input onChange={handleChange} value={title} type="text" name="findByTitle" id="findByTitle"></input>
            {error && <p>Field must not be empty!</p>}
            <button type="submit">SUBMIT</button>
        </form>
    </Container>
}