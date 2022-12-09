
import React from 'react'
import FCRecipe from './FCRecipe'
import ArrRecipe from '../ArrRecipe'
import CCMyKitchen from './CCMyKitchen'

export default function FCRecipes(props) {



  // const food = props.dishes.map((dish) => <FCRecipe id={dish.id} getDataToFCRecipe={props.sendDataToCCMyKitch} name={dish.name} imgUrl={dish.imgUrl} desc={dish.desc} key={dish.id} />);


  const sendDataToCCMyKitch = (name,btnText) => {
    { props.getDataToFCRecipe(name,btnText) }

  }

  return (
    <div className='row'>
      <h2>My dishes</h2>
      {props.food.map((dish) =>
        <FCRecipe id={dish.id} sentData={sendDataToCCMyKitch} name={dish.name}
          imgUrl={dish.imgUrl} desc={dish.desc} key={dish.id} btnText="prepare dish" />)}
      
      <div className='row' >
        <h2 style={{display:props.styleCss}}>Dishes eaten</h2>
        <h2 style={{display:props.styleCss}}>Eaten:{props.counter}</h2>
      {props.foodDone.map((dish) => 
      <FCRecipe id={dish.id} sentData={sendDataToCCMyKitch} name={dish.name} 
      imgUrl={dish.imgUrl} desc={dish.desc} key={dish.id} btnText="eat me!" />)}
      </div>


    </div>

  )
}
