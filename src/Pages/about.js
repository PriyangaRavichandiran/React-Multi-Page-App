import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function About() {
  return (
    <div>
      <h1 className="mb-4">About This App</h1>
      
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Project Overview</Card.Title>
          <Card.Text>
            This is a demo React application showcasing multiple pages with React Router, form validation, 
            lazy loading, and styling with React Bootstrap. It demonstrates several important React concepts 
            and best practices for building modern web applications.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className="mb-4">
        <Card.Header>Features</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Multi-page navigation using React Router</ListGroup.Item>
          <ListGroup.Item>Form validation for required fields, email format, and password length</ListGroup.Item>
          <ListGroup.Item>Performance optimization with lazy loading and Suspense</ListGroup.Item>
          <ListGroup.Item>Responsive design using React Bootstrap components</ListGroup.Item>
          <ListGroup.Item>Clean project structure with separated components and pages</ListGroup.Item>
        </ListGroup>
      </Card>
      
      <Card>
        <Card.Header>Technologies Used</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>React 18</ListGroup.Item>
          <ListGroup.Item>React Router v6</ListGroup.Item>
          <ListGroup.Item>React Bootstrap</ListGroup.Item>
          <ListGroup.Item>React Hooks (useState, lazy loading)</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default About;