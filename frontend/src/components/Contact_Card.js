import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Contact_Card extends Component {
  constructor(props) {
    super(props);
  }
	render() {

      return (
        <div>
          <Card>
            <CardBody>
              <CardTitle>{this.props.item.name}</CardTitle>
              <CardSubtitle>{this.props.item.phone}</CardSubtitle>
              <CardText>{this.props.item.address.street}</CardText>
              <Button>Edit</Button>  {/* Needs to be implemented */}
            </CardBody>
          </Card>
        </div>

      );
    }
}
export default Contact_Card;