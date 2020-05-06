import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function RenderDish({dish}) {
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

function RenderComments({comments}) {

    if (comments != null) {
        const list_items = comments.map((comment) => {
            return (
                <li key={comment.id} className="">
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
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

const DishDetail = (props) => {

    const dish = props.dish;

    if (dish != null) {

        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={dish} />
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        );
    }
    else
        return(
            <div></div>
        );

}

export default DishDetail;