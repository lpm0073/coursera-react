import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button,
    Label, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);


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
            <React.Fragment>
                <div className="m-1">
                    <Button outline  onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg">Submit Comment</span>
                    </Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleLogin}>
                            <Row className="form-group">
                            <Label htmlFor="email" md={2}>Rating</Label>
                            <Col md={10}>
                                <Control.select model=".rating"   
                                                name="rating"
                                                className="form-control"
                                                >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name"
                                        id="name" 
                                        name="name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        placeholder="Last Name" />
                                    <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters'
                                        }}
                                         />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" 
                                        id="comment" 
                                        name="comment"
                                        className="form-control"
                                        rows="12" />
                                </Col>

                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </React.Fragment>
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