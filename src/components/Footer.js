import React from 'react'

import Card from 'react-bootstrap/Card';




function Footer() {
  return (
    <div>
    <Card className="text-center">
      
      
      <Card.Body>
        <Card.Title>Contact</Card.Title>
        <Card.Text>
            250 Broome Street<br/>
            New York  NY 10002
            <br/>
           cosmiclock@gmail.com<br/>
            (347)778-5889
            
        </Card.Text>
        <Card.Title>Hours</Card.Title>
        <Card.Text> Seven days a week | 5.00 pm - 10 pm</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">All Rights Reserved To Cosmic Clock </Card.Footer>
    </Card></div>
  )
}

export default Footer