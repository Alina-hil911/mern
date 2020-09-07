import React, { useState } from 'react';
import { connect } from 'react-redux';

import { validateValues } from '../../utils/validateValues';
import { postFilmStart } from '../../redux/Films/actions';
import { CustomForm } from './styled';
const Form = ({ postFilmStart }) => {
    const [values, setValues] = useState({ title: '', releaseYear: '', format: '', stars: '' });
    const [errors, setErrors] = useState({})

    console.log(postFilmStart)
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateValues(values)
        console.log(errors, 'errors')
        if (Object.keys(errors).length === 0) {
            postFilmStart(values);
            setValues({ title: '', releaseYear: '', format: '', stars: '' });
            setErrors({})
        }
        else setErrors(errors)

    }

    return <CustomForm onSubmit={handleSubmit}>
        <h2>Add a film</h2>
        <label htmlFor="title">TITLE</label>
        <input value={values.title} onChange={handleChange} type="text" name="title" id="title"></input>
        {errors.title && <p>{errors.title}</p>}
        <label htmlFor="releaseYear">RELEASE YEAR</label>
        <input value={values.releaseYear} onChange={handleChange} type="text" name="releaseYear" id="releaseYear"></input>
        {errors.releaseYear && <p>{errors.releaseYear}</p>}
        <label htmlFor="format">FORMAT</label>
        <input value={values.format} onChange={handleChange} type="text" name="format" id="format"></input>
        {errors.format && <p>{errors.format}</p>}
        <label htmlFor="stars">STARS</label>
        <textarea value={values.stars} onChange={handleChange} id="stars" name="stars"></textarea>
        {errors.stars && <p>{errors.stars}</p>}
        <button type="submit" >SUBMIT</button>
    </CustomForm>
}

const mapDispatchToProps = dispatch => ({
    postFilmStart: (payload) => dispatch(postFilmStart(payload))
})

export default connect(null, mapDispatchToProps)(Form);