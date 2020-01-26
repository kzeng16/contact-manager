import React, { Component } from 'react';
import Contact_Card from './Contact_Card';
import { Container, Row, Col } from 'reactstrap';



class Contact_Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // Gets json stuff from here
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,  // holds the json stuff
            })
          });
      }

    render () {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
          return <div>Loading...</div>
        }

        else {
            let cards = items.map(item => { // iterates through json and creates cards for it
                return (
                    <Col sm="3">
                        <Contact_Card item={item}/>
                    </Col>
                )
            })

            return (   
                <Container fluid="md">
                    <Row>   
                        {cards} {/*Cards show here*/}
                    </Row>
                </Container>
            );
        }
    }
}

export default Contact_Page;
