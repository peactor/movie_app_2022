import React from 'react';
import propTypes from 'prop-types';

function Food({ name , picture, rating}){
  
  return (
  <div>
    <h2>I like { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt ={name}/>)
  </div>
  );
}

const foodILike = [
  {
    id : 1,
    name: 'kimchi',
    image: 'https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405',
    rating : 5,
  },

  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating : 4.9,
  },

  {
    id : 3,
    name : 'Bibimbap',
    image : 'https://cdn.leitesculinaria.com/wp-content/uploads/fly-images/108891/bibimbap-recipe-1200x1200-c.jpg.optimal.jpg',
    rating : 3.8,
  },

];



function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    ))}
    </div>);
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating: propTypes.number,

};

export default App;
