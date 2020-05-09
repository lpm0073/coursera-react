import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


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
                    <CommentForm />
                </Card>

            </div>

        )

    }
    else 
        return(
            <div></div>
        )
}

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
          };

          this.toggleModal = this.toggleModal.bind(this);
        }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return ( 
            <div className="m-1">
                <Button outline  onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
            </div>
)
      }

}

const DishDetail = (props) => {

    if (props.dish != null) {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
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