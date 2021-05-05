import React from 'react';
import "./Stamps.css";
import Form from 'react-bootstrap/Form'

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
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Street Address 2</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>City</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Zipcode</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
</div>
</main>
)

export default Stamps;