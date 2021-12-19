import React, { useEffect } from 'react';
import './App.css';
import { AxiosFilmURL, AxiosFoodURL } from './api';
import {  Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Stack, styled } from '@mui/material';
import { activities, activitiesList } from './data';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  minWidth: 245,
  fontSize: '20px',
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
  let [refresh, setRefresh] = React.useState<boolean>(false);
  const [film, setFilm] = React.useState<Film>();
  const [activity, setActivity] = React.useState<activities>();
  const [food, setFood] = React.useState<Food[]>([]);

  const [IsHouseActivity, setIsHouseActivity] = React.useState(false);

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

    const filteredList = activitiesList.filter((inHouse) => inHouse.isHouseActivity === IsHouseActivity);
   
    setActivity(filteredList[Math.floor(Math.random() * filteredList.length)])
    setRefresh(false);
  }, [refresh, IsHouseActivity])
  console.log(activity);



  return (

    <div className="App">
      <header className="App-header">
      <>
      <br/>
      <img src="/logo.png" className="App-logo" alt="logo" />
      <br/>
      <FormControl component="fieldset">
          <FormLabel component="legend" style={{color: 'white'}}>Ambiente</FormLabel>
          <RadioGroup
            row 
            aria-label="Ambiente"
            defaultValue="Rua"
            name="radio-buttons-group"
          >
            <FormControlLabel checked={!IsHouseActivity? true: false} onClick={() => {setIsHouseActivity(false)}} control={<Radio  defaultChecked/>} label="Rua" />
            <FormControlLabel checked={IsHouseActivity? true: false} onClick={() => setIsHouseActivity(true)}  control={<Radio />} label="Casa" />
      
          </RadioGroup>
        </FormControl>

        <Stack spacing={2}>
          <p className="text">Filme</p>
          <Item className="text" key={film?.id}>{film?.name}</Item>
          <p className="text">Comida</p>
          <Item className="text">{food[0]?.strMeal}</Item>
          <p className="text">Atividade</p>
          <Item className="text">{activity?.name}</Item>
          <Item className="text">{activity?.description}</Item>
        </Stack>
       <br/>
      <Button onClick={() => setRefresh(true)} variant="contained">
        Embaralhar
      </Button>
      </>
      </header>
    </div>
  );
}

export default App;
