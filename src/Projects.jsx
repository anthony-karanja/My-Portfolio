import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <>
        <div id='projectsSection'>
            <h2>Projects I have Done</h2>
            <div id='projects'>
                <Card style={{ width: '24rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" />
                    <Card.Body>
                        <Card.Title>Local Dish Corner</Card.Title>
                        <Card.Text>
                            Providing a marketing solution to increase visibility for local food vendors to their customers.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" />
                    <Card.Body>
                        <Card.Title>KeepTabs</Card.Title>
                        <Card.Text>
                            Marketing solution to increase visibility for local food vendors to their customers.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" />
                    <Card.Body>
                        <Card.Title>Gen-Z Dictionary</Card.Title>
                        <Card.Text>
                            Marketing solution to increase visibility for local food vendors to their customers.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  );
}

export default Projects;