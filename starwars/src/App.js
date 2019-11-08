import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import People from "./components/People.js";
import styled from "styled-components";

const App = () => {

  const Title = styled.h1`
    font-size: 4.0rem;
  `;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://lambda-swapi.herokuapp.com/api/people/").then(response => {
    setData(response.data.results);
    console.log(response.data.results);
    })
  },[]);

  return (
    <div className="App">
      <Title className="Header">React Wars</Title>
      {data.map(person => {
         return <People name = {person.name} gender = {person.gender} hairColor = {person.hair_color} mass = {person.mass} skinColor = {person.skin_color}/>
       })}
    </div>
  );
}

export default App;
