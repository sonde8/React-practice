import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CelebInfo = ({item}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imgSrc} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.content}
          </Card.Text>
          <a href={item.sns}></a>
          <Button variant="primary" onClick={()=>{window.location.href=item.SNS}}>인스타그램</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CelebInfo