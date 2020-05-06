import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);

    console.log("Main Component constructor() invoked");
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log("Main Component onDishSelect() invoked");
  }

  render() {
    console.log("Main Component render() invoked");
    return ( 
      <div className="container">
      <Navbar dark color="primary">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </Navbar>
      <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
    )
  }
}

export default Main;
