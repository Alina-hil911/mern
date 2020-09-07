export const fetchAllFilms = async () => {
    const res = await fetch(
        'http://localhost:5000/', {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    );
    const data = await res.json();
    return data;
};

export const postFilm = async (payload) => {
    const res = await fetch(
        'http://localhost:5000/', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    }
 
    );
    console.log('res', res)
    const data = await res.json()
    return data;
}

export const deleteFilm = async (id) => {
    const res = await fetch(
        `http://localhost:5000/${id}`, {
      method: 'DELETE'
    }
    );
    return res.status;
    //return data;
};


export const getSortedFilms = async () => {
    const res = await fetch(
        'http://localhost:5000/sort'
    );
    const data = await res.json();
    console.log(data);
    return data;
}

export const getFilmsByTitle = async (title) => {
    const res = await fetch(
        `http://localhost:5000/?title=${title}`);
        const data = await res.json();
        console.log(data);
        return data;
    
}

export const getFilmsByActor = async (name) => {
    const res = await fetch(
        `http://localhost:5000/?name=${name}`);
        const data = await res.json();
        console.log(data);
        return data;
    
}


export const postFile = async (file) => {
    const formData = new FormData(); 
    formData.append( 
        "file", 
        file, 
        'fileName'
       
      ); 
      console.log('postfile', file)
    const res = await fetch(
        'http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
 
    );
    console.log('res', res)
    const data = await res.json()
    return data;
}