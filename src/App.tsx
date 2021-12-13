import React, { useEffect } from 'react';
import './App.css';
import { AxiosFilmURL, AxiosFoodURL } from './api';
import {  Paper, Stack, styled } from '@mui/material';
import { places } from './random';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  minWidth: 245,
  fontSize: '25px',
  color: theme.palette.text.secondary,
}));

interface Film {
  id: string;
  name: string;
}
interface Food {
  id: string;
  strMeal: string;
}
function App() {

  const [film, setFilm] = React.useState<Film>();
  const [food, setFood] = React.useState<Food[]>([]);

  useEffect(() => {
    AxiosFilmURL.get<Film>('/').then((res) => {
     if(res.data) {
      setFilm(res.data);
     }
    })
    AxiosFoodURL.get<any>('/').then((res) => {
     if(res.data.meals) {
      setFood(res.data.meals);
     }
    })
  }, [])
 const randomPlace = places[Math.floor(Math.random() * places.length)]
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <Stack spacing={2}>
          <p className="text">Filme</p>
          <Item className="text" key={film?.id}>{film?.name}</Item>
          <p className="text">Rolê</p>
          <Item className="text">{randomPlace.name}</Item>
          <p className="text">Comida</p>
          <Item className="text">{food[0]?.strMeal}</Item>
        </Stack>
       
      </header>
    </div>
  );
}

export default App;
