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
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                </ul>
              </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='project1'>
          <Card.Body>
            <Card.Title>UI/UX Designer</Card.Title>
              <Card.Text>
                <ul>
                  <li>Landing Page</li>
                  <li>Prototyping</li>
                  <li>Userflow</li>
                  <li>Wireframe</li>
                  <li>Mobile app design</li>
                  <li>Usability Testing</li>
                </ul>
              </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default Services