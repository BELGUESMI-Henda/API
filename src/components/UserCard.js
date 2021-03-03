import React from 'react'
import { Col, Card, CardHeader, CardText, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
function UserCard({ user }) {
    return (
        <Col sm="10" md="4" className="my-3">
            <Card className="bg-black">
                <CardHeader className="p-5 d-flex justify-content-around align-items-center ">
                    <CardText
                        style={{
                            width: "50px",
                            height: "50px",
                            fontSize: "1em",
                        }}
                        className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
                    >
                        {user.name[0]}
                    </CardText>
                    <ListGroup flush className="w-75 font-weight-bold">
                        <ListGroupItem >{user.name}</ListGroupItem>
                        <ListGroupItem>{user.email}</ListGroupItem>
                        <Link className="text-light" to={`/profile/${user.id}`}>
                            <button className='btn btn-success mt-2'>
                                See Profile
                            </button>
                        </Link>
                    </ListGroup>
                </CardHeader>
            </Card>
        </Col>
    )
}

export default UserCard