import './App.css';
import Header from '../src/components/Header/Header.js'
import Main from '../src/components/Main/Main.js';
import Footer from '../src/components/Footer/Footer.js';
// import Stamps from '../src/components/Stamps/Stamps';
// import { Form, Field } from '@leveluptuts/fresh';
import AddressForm from './AddressForm';
// var express = require('express');
// var cors = require ('cors');
// var app = express ();

// app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
// app.del('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

function App() {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     address: [],
    //     isLoaded: false,
    //   }
    // }
    // componentDidMount() {
    //   fetch{''}

    // }

    // render (){
    //   var { isverified } = this.state;

    //   if (isverified){
    //     return <img src = "../images/approved.jpg">Approved!</img>
    //   }
    //   else {
    //     return <img src = "../images/declined.jpg">Not Verified</img>
    //   }
    // }
  return (
    <div className="App">
    <Header />
       <header className="App-header">

      
       {/* <p>
          Welcome to my app for checking addresses!
        </p>
        Let's check an address below! */}
       {/* <Stamps /> */}
       <AddressForm />
       </header>

 <Main />
<Footer />
      </div>
  );
}

export default App;
