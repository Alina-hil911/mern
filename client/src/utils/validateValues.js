export const validateValues = values => {
    // console.log(values.format.toUpperCase() !== 'DVD' || values.format.toUpperCase() !== 'BLU-RAY')
    const errors = {};
    if (!values.title) {
        errors.title = 'title is required'
    };
    if (!values.releaseYear) {
        errors.releaseYear = 'release year is required'
        
    } else if (isNaN(Number(values.releaseYear))) {
        errors.releaseYear = 'release year must be a number'
    } else if(values.releaseYear < 1895 || values.releaseYear > 2020) { //1895 is the date of the 1st film
        errors.releaseYear = 'release year is not valid'
    }

    if (!values.format) {
        errors.format = 'format is required'

    } else if (values.format.toUpperCase() !== 'VHS' && values.format.toUpperCase() !== 'DVD' && values.format.toUpperCase() !== 'BLU-RAY') {
        errors.format = 'format must be either VHS or DVD or Blu-Ray'
    }
    if (!values.stars) {

        errors.stars = 'stars is required'

    }
    return errors;
}