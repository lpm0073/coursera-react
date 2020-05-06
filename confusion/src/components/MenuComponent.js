import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        console.log("Menu Component constructor is invoked");
    }

    componentDidMount() {
        console.log("Menu Component componentDidMount is invoked");
    }

    componentDidUpdate() {
        console.log("Menu Component componentDidUpdate is invoked");
    }
    

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}>
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

        console.log("Menu Component render invoked: ", ids);

        return (
                <div className="row">
                    {menu}
                </div>
        );
    }
}

export default Menu;