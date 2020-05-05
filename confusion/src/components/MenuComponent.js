import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log("Menu Component constructor is invoked")
    }

    componentDidMount() {
        console.log("Menu Component componentDidMount is invoked")
    }

    componentDidUpdate() {
        console.log("Menu Component componentDidUpdate is invoked")
    }
    
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
        console.log("Menu Component onDishSelect invoked")
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                </Card>
              </div>
            );
        });

        const ids = this.props.dishes.map((dish) => {
            return (
                <span>{dish.id}</span>
            );
        });

        console.log("Menu Component render invoked: ", ids)

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 m-1">
                    <DishDetail dish={this.state.selectedDish} />
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;