import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        console.log("Menu DishDetail constructor is invoked")
    }

    renderDish(dish) {
        console.log("Menu DishDetail renderDish invoked")
        if (dish != null)
            return(
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
);
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        console.log("Menu DishDetail renderComments invoked")

        if (comments != null) {
            const list_items = this.props.dish.comments.map((comment) => {
                return (
                  <li key={comment.id} className="">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                  </li>
                );
            });

            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <CardTitle><h4>Comments</h4></CardTitle>
                            <CardText>
                                <ul className = "list-unstyled">
                                    {list_items}
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
    
            )
    
        }
        else 
            return(
                <div></div>
            )
    }

    render() {
        console.log("Menu DishDetail render is invoked")
        const dish = this.props.dish;

        if (dish != null) {
    
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(dish)}
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );

    }
}

export default DishDetail;