import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <>
        <div id='projectsSection'>
            <h2>My Projects</h2>
            <div id='projects'>
                <Card style={{ width: '18rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" width='286px' height='180px' />
                    <Card.Body>
                        <Card.Title>Local Dish Corner</Card.Title>
                        <Card.Text>
                            With under 1 year of experience in front-end development, I collaborated with a cross-functional team for our Capstone project.
                            The goal was to deliver high-fidelity designs and an MVP in under one month, impacting local food vendors' marketing in just 2 months.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" width='286px' height='180px' />
                    <Card.Body>
                        <Card.Title>KeepTabs</Card.Title>
                        <Card.Text>
                            With under 1 year of experience in front-end development, I collaborated with a cross-functional team for our Capstone project.
                            The goal was to deliver high-fidelity designs and an MVP in under one month, impacting local food vendors' marketing in just 2 months.
                        </Card.Text>
                        <Button variant="primary">Visit</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='project1'>
                    <Card.Img variant="top" src="/Images/8.jpg" width='286px' height='180px' />
                    <Card.Body>
                        <Card.Title>Gen-Z Dictionary</Card.Title>
                        <Card.Text>
                            With under 1 year of experience in front-end development, I collaborated with a cross-functional team for our Capstone project.
                            The goal was to deliver high-fidelity designs and an MVP in under one month, impacting local food vendors' marketing in just 2 months.
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