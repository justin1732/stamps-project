import React, { Component } from 'react';
import AddressInput from './AddressInput';
import axios from 'axios';

const API_KEY= 'TEST_J6h+wzVuOOQlnxi4H6VwhZoBWolFjnM61n6J3K1bTcY';

class AddressForm extends Component {
    constructor(props){
        super(props);
        this.state = this.getInitialState();


        this.onQuery= this.onQuery.bind(this);

        this.onAddressChange=this.onAddressChange.bind(this);

        this.onCheck=this.onCheck.bind(this);

        this.onClear = this.onClear.bind(this);
    }

    onQuery(evt){
        const query = evt.target.value;

        if (!query > 0){
            this.setState(this.getInitialState());
            return;
        }

        const self = this;
        axios.post('https://api.shipengine.com/v1/address/validate',
        {   'headers':{
            'Host': 'api.shipengine.com',
            'API_KEY': API_KEY,
            'Content-Type': 'application/json',
        }}, {
            'params':{
            'query': query,
            'maxresults':1,
        }}).then(function(response) {
            const state = self.getInitialState();
            self.setState(state);
        });
    }
    getInitialState(){
        return{
            'status' : '',
            'address': {
                'street': '',
                'city': '',
                'state': '',
                'postalCode': '',
                'country': ''
            },
            'query': '',
            'locationId': '',
            'isChecked': false,
            'coords': {}
        }
    }

    onClear(evt){
        const state = this.getInitialState();
        this.setState(state);
    }

    onAddressChange(evt) {
        const id = evt.target.id
        const val = evt.target.value

        let state = this.state
        state.address[id] = val;
        this.setState(state);
    }

    onCheck(evt){
        let headers = {
            'API_KEY': API_KEY,
                }

        if (this.state.locationId.length > 0){
            headers['original_address']= this.state.original;
        } else {
            headers['searchtext']= this.state.original_address.address_line1
            + this.state.address.city_locality + this.state.address.state_province + this.state.address.postal_code;
        }

        const self = this;
        axios.post('https://api.shipengine.com/v1/address/validate' ,
        {'headers': headers}).then (function(response){
            const view = response.data.Response.View
            if (view.length > 0 && view[0].Result.length > 0){
                const location = view[0].Result[0].Location;

                self.setState({
                    'status': '',
                       'original_address':{
                        'street': location.Address.Street,
                        'city': location.Address.City,
                        'state':location.Address.State,
                        'zipcode': location.Address.PostalCode,
                        'country': "US",
                        },
                        'coords': {
                            'lat': location.DisplayPosition.Latitude,
                            'lon': location.DisplayPosition.Longitude
                        }
                });
            } else {
                self.setState({
                  'isChecked': true,
                  'coords': null,
                })
              }
      
            })
            .catch(function (error) {
              console.log('caught failed query');
              self.setState({
                'isChecked': true,
                'coords': null,
              });
            });
        }

        alert(){
            if(!this.state.isChecked){
                return;
            }
            if (this.state.status === "verified"){
                return(
                    <div className="alert alert-success" role="alert">
                        <b>Success! Verified address!</b>
                        {/* <img src="error.png" alt="error">Error</img> */}
                    </div>
                );
            }
                else {
                    return (
                        <div className="alert alert-warning" role="alert">
                            <b>Sorry! Invalid Address! Try again?</b>
                            {/* <img src="correct.png" alt="valid">Success!</img> */}
                        </div>
                    );
                }
            }
        render(){
            let result= this.alert();
            return (
                <div className="container">
                    {/* <AddressSuggest
                    query={this.state.query}
                    onChange={this.onQuery}
                   /> */}
                   <AddressInput
                   street={this.state.address.street}
                   city={this.state.address.city}
                   state={this.state.address.state}
                   zipcode={this.state.address.zipcode}
                   onChange={this.onAddressChange}
                   />
<br />
{ result } 
<button type="submit" className="btn btn-primary" onClick={this.onCheck}>Check</button>
<button type="submit" className="btn btn-outline-secondary" onClick={this.onClear}>Clear Result</button>
                                   </div>
                );
        }
}

export default AddressForm;
    


// var request = require('request');
// module.exports = {
//     findAssets : function (req, res){
// var options = {
//       'method': 'POST',
//   'url': 'https://api.shipengine.com/v1/addresses/validate',
//   'headers': {
//     'Host': 'api.shipengine.com',
//     'API-Key': 'TEST_J6h+wzVuOOQlnxi4H6VwhZoBWolFjnM61n6J3K1bTcY',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify([{"address_line1":"525 S Winchester Blvd","city_locality":"San Jose","state_province":"CA","postal_code":"95128","country_code":"US"}])

// };
// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });
// }
// // }

// componentDidMount (){
//   const article = { title}

