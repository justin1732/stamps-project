import React from 'react';
import "./Stamps.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// function SimpleForm(props) {
//     const nameEl = React.useRef(null);

//     const handleSubmit = e => {
//         e.preventDefault();
//         alert(nameEl.current.value);
//     };

//     return (
//         <form onSubmit = {handleSubmit}>
//             <label>Name:
//                 <input type="text" ref={nameEl} />
//             </label>
//             input type="submit" name="Submit" />
//         </form>
//     )
// }
const Stamps = props =>(
<main className= {`${props.shake}`}>
<div className="container">
    {props.children}
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Street Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Street Address, eg 123 Main Street" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Street Address 2</Form.Label>
    <Form.Control type="text" placeholder="Enter Apartment number or leave blank, eg Apt 604" />
    </Form.Group>
    <Form.Group controlId="formGroupEmail">
    <Form.Label> City </Form.Label>
    <Form.Control type="text" placeholder="Enter City, eg New York" />
  </Form.Group>
<br />
  <Form.Group controlId="formGroupPassword">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="Enter two-letter state, eg NY" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Zipcode</Form.Label>
    <Form.Control type="number" placeholder="Enter Zip Code, eg 13221" />
  </Form.Group>
  <Button variant="danger" type="submit">
    Submit
  </Button>
</Form>
</div>
</main>
)

export default Stamps;