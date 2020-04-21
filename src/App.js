import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    rating: 3
  },
  {
    id: 2,
    name: "samgiopsal",
    rating: 5
  },
  {
    id: 3,
    name: "kimbap",
    rating: 2.3
  },
]

function Food({ name , rating}){
  return <div>
      <h1> I like {name}</h1>
      <h4> {rating} / 5.0</h4>
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div className="App">
      {foodILike.map(food => (
      <Food key={food.id} name={food.name} rating={food.rating}/>
      ))}
    </div>
  );
}

export default App;
