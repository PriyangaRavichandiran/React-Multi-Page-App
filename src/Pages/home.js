import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="my-4">Welcome to Our React Application</h1>
      
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Try Our Form</Card.Title>
              <Card.Text>
                Experience our form with validation features. Test your inputs against our validation rules.
              </Card.Text>
              <Button as={Link} to="/form" variant="primary">Go to Form</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-md-6 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>About This Project</Card.Title>
              <Card.Text>
                Learn more about this project, its architecture, and the technologies used.
              </Card.Text>
              <Button as={Link} to="/about" variant="info">About Page</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;