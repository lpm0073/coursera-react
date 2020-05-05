import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        console.log("Menu DishDetail constructor is invoked")
        this.setState({ dish: props.dish});
    }

    render() {
        console.log("Menu DishDetail render is invoked")
        const dish = this.props.dish;

        if (dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div  className="col-12 m-1">
                            <Card>
                                <CardImg width="100%" top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );

    }
}


export default DishDetail;