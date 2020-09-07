import React from 'react';
import { connect } from 'react-redux'

import {useMountEffect} from './hooks/useMountEffect';
import { fetchAllFilmsStart, deleteFilmStart, getSortedFilmsStart, getFilmsByTitleStart, getFilmsByActorStart} from './redux/Films/actions';
import { FilmCard, Form, Loader, FindByTitleForm, Uploader} from './components';
import {Container, CardContainer} from './styled';
const App = ({ films, fetchAllFilmsStart, isLoading, getFilmsByTitleStart, deleteFilmStart, getSortedFilmsStart, getFilmsByActorStart}) => {

  useMountEffect(()=>{fetchAllFilmsStart()})
  const handleDeleteFilm = (id) => {
    deleteFilmStart(id);
  }

  const handleShowFilmsSortedByAlphabet = () => {
    getSortedFilmsStart();

  }

  const handleFindByTitle = (title) => {
    getFilmsByTitleStart(title)
  }
  
  const handleFindByActor = (name) => {
    getFilmsByActorStart(name)
  }
  

  return (
    <Container> 
      <Form></Form>
      <Uploader></Uploader>
      <FindByTitleForm type="title" handleFindBy={handleFindByTitle}></FindByTitleForm>
      <FindByTitleForm type="actor" handleFindBy={handleFindByActor}></FindByTitleForm>
      <button onClick={()=>handleShowFilmsSortedByAlphabet()}>SHOW FILMS SORTED BY ALPHABET</button>
      <CardContainer>
        {isLoading ? <Loader></Loader> : films && films.map(item=>< FilmCard handleDeleteFilm={handleDeleteFilm} id={item._id} key={item._id} title={item.title} releaseYear={item.releaseYear} format={item.format} stars={item.stars}></FilmCard>)}
      
      </CardContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  films: state.films,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchAllFilmsStart: () => dispatch(fetchAllFilmsStart()),
  deleteFilmStart: (id) => dispatch(deleteFilmStart(id)),
  getSortedFilmsStart: () => dispatch(getSortedFilmsStart()),
  getFilmsByTitleStart: (title) => dispatch(getFilmsByTitleStart(title)),
  getFilmsByActorStart: (name) => dispatch(getFilmsByActorStart(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
