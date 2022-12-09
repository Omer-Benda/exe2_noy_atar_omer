
import React, { Component } from 'react'
import FCRecipes from './FCRecipes'
import ArrRecipe from '../ArrRecipe'


export default class CCMyKitchen extends Component {


  constructor(props) {
    super(props);


    this.state = {
      foodToEaT: ArrRecipe,//// המערך של המנות
      foodEaten: [],
      counter: 0
    };




  }

  sendDataToCCMyKitch = (name, btnText) => {




    if (btnText == 'prepare dish') {
      // alert("dddd")
      let found = this.state.foodToEaT.filter((dish) => dish.name !== name);
      let Nofound1 = this.state.foodToEaT.filter((dish) => dish.name == name);

      let Nofound = [...this.state.foodEaten, Nofound1[0]];

      this.setState({
        foodToEaT: found,
        foodEaten: Nofound,
        //counter: [...this.state.counter+1]
        
      })
      
      
      this.setState(prevState=>({counter:prevState.counter+1}));
     

    }

    if (btnText == 'eat me!') {
      // alert("bbbb")
      let Nofound1 = this.state.foodEaten.filter((dish) => dish.name == name);
      let found = this.state.foodEaten.filter((dish) => dish.name !== name);

      let Nofound = [...this.state.foodToEaT, Nofound1[0]];

      this.setState({
        foodToEaT: Nofound,
        foodEaten: found,
        //counter: this.state.counter-1
        
      })
      this.setState(prevState=>({counter:prevState.counter-1}));
     

    }
   


  }


  render() {

    return (
      <div >
        <FCRecipes styleCss={this.state.counter > 0 ? 'block': 'none'} counter={this.state.counter} food={this.state.foodToEaT} foodDone={this.state.foodEaten} getDataToFCRecipe={this.sendDataToCCMyKitch} />
      </div>
    )
  }
}
