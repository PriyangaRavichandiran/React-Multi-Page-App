import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Form is valid - here you would typically submit the data
    console.log('Form data:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      password: '',
      message: ''
    });
  };
  
  return (
    <div>
      <h1 className="mb-4">Contact Form</h1>
      
      {submitted && (
        <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
          Form submitted successfully!
        </Alert>
      )}
      
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Enter your password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password must be at least 8 characters long.
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
                placeholder="Enter your message"
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}export default FormPage;


// import React, { useState } from "react";
// function FormPage() {
//     const [formData, setFormData] = useState(
//         {
//             name: "",
//             email: "",
//             pass: "",
//             cpass: ""
//         }
//     )
//     const [errors, setErrors] = useState({
//         name: "",
//         email: "",
//         pass: "",
//         cpass: ""
//     });
//     const ChangeHandle = (e) => {
//         // setFormData((prev) => {return {...prev, [e.target.name]: e.target.value}})
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//          setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
//     }
//     const HandleSubmit = (e) => {
//         e.preventDefault();
//         let isValid = true;
//         const newErrors = { ...errors };
    
//         if (!formData.name.trim()) {
//           newErrors.name = 'Name is required';
//           isValid = false;
//         }
    
//         if (!formData.email.trim()) {
//           newErrors.email = 'Email is required';
//           isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//           newErrors.email = 'Invalid email format';
//           isValid = false;
//         }
    
//         if (!formData.pass.trim()) {
//           newErrors.pass= 'Password is required';
//           isValid = false;
//         } else if (formData.pass.length < 8) {
//           newErrors.pass = 'Password must be at least 8 characters';
//           isValid = false;
//         }

//         if (!formData.cpass.trim()) {
//             newErrors.cpass= 'Password is required';
//             isValid = false;
//           } else if (formData.cpass.trim() !== formData.pass.trim()) {
//             newErrors.cpass = 'Password is not matching';
//             isValid = false;
//           }
//         setErrors(newErrors);
//         console.log(newErrors)
    
//         if (isValid) {
//             e.preventDefault()
//             console.log(formData)
//           alert('Form submitted successfully!');
//           // Handle form submission logic here
//           setFormData({name:'', email:'', pass:''});
//         }
//       };
//     // const HandleSubmit = (e) => {
//     //     e.preventDefault()
//     //     console.log(formData)
//     //     console.log(e.target[2].value)
//     //     console.log(e.target[3].value)
//     //     setFormData(
//     //         {
//     //             name: "",
//     //             email: "",
//     //             pass: "",
//     //             cpass: ""
//     //         }
//     //     )

//     // }
//     return (
//         <div>
//             <form onSubmit={HandleSubmit}>
//                 <label>Enter Name</label>
//                 <input type="text" placeholder="enter name" name="name" value={formData.name} onChange={ChangeHandle}></input>
//                 {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//                 <br />
//                 <label>Enter Email</label>
//                 <input type="email" placeholder="enter email" name="email" value={formData.email} onChange={ChangeHandle}></input>
//                 {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//                 <br />
//                 <label>Password</label>
//                 <input type="string" placeholder="Password" name="pass" value={formData.pass} onChange={ChangeHandle}></input>
//                 {errors.pass && <p style={{ color: 'red' }}>{errors.pass}</p>}
//                 <br />
//                 <label>Confirm Password</label>
//                 <input type="string" placeholder="Confirm Password" name="cpass" value={formData.cpass} onChange={ChangeHandle}></input>
//                 {errors.pass && <p style={{ color: 'red' }}>{errors.pass}</p>}
//                 <br />

//                 <button>Submit </button>

//             </form>
//         </div>
//     )
// } export default FormPage