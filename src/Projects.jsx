import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <>
        <div>
            <Card style={{ width: '18rem' }} className='project1'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Local Dish Corner</Card.Title>
                    <Card.Text>
                        With under 1 year of experience in front-end development, I collaborated with a cross-functional team for our Capstone project.
                        The goal was to deliver high-fidelity designs and an MVP in under one month, impacting local food vendors' marketing in just 2 months.
                    </Card.Text>
                    <Button variant="primary">Visit</Button>
                </Card.Body>
            </Card>
        </div>
    </>
  );
}

export default Projects;