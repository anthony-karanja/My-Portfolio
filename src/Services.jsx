import React from 'react'
import Card from 'react-bootstrap/Card';

function Services() {
  return (
    <>
      <h1>What I do</h1>
      <div id='projects'>
        <Card style={{ width: '18rem' }} className='project1'>
          <Card.Body>
            <Card.Title>Front-End Developer</Card.Title>
              <Card.Text>
                React
              </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='project1'>
          <Card.Body>
            <Card.Title>UI/UX Designer</Card.Title>
              <Card.Text>
                React
              </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default Services