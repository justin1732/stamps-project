import React from 'react';
import "./Stamps.css";


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
</div>
</main>
)

export default Stamps;