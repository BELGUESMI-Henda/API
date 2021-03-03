import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from "react-router-dom";

const Profile = ({ listOfUSer, match }) => {
    const user = listOfUSer.find(el => el.id == match.params.id);

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{user.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Contact:</CardSubtitle>
                    <CardText>
                        @:{user.email} - Tel: {user.phone} - WebSite: {user.website}
                    </CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Adresse:</CardSubtitle>
                    <CardText>
                        {user.address.city}, {user.address.street}, {user.address.suite} - {user.address.zipcode}
                    </CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Company:</CardSubtitle>
                    <CardText>
                        {user.company.name} <br />
                        {user.company.catchPhrase}
                    </CardText>
                    <Link to="/"><Button>Back Home</Button></Link>
                </CardBody>
            </Card>
        </div>
    );
}

export default Profile;