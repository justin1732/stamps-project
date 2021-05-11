import React, { Component } from 'react';
import AddressInput from './AddressInput';
import axios from 'axios';

const APP_ID_HERE= 'APP_ID_HERE';
const APP_CODE_HERE = 'APP_CODE_HERE';

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
            'API-Key': 'EST_J6h+wzVuOOQlnxi4H6VwhZoBWolFjnM61n6J3K1bTcY',
        }}, {
            'params':{
            'query': query,
            'maxresults':1,
        }}).then(function(response) {
            if (response.data.suggestions > 0){
            const id = response.data.suggestion[0].locationId;
            const address = response.data.suggestions[0].address;
            self.setState({
                'address': address,
                'query': query,
                'locationId' : id
            })
        } else {
            const state = self.getInitialState();
            self.setState(state);
        }
        });
    }
    getInitialState(){
        return{
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
            'app-id': APP_ID_HERE,
            'app-code': APP_CODE_HERE,
        }

        if (this.state.locationId.length > 0){
            headers['locationId']= this.state.locationId;
        } else {
            headers['searchtext']= this.state.address.street
            + this.state.address.city + this.state.address.postalCode + this.state.address.country;
        }

        const self = this;
        axios.get('https://api.shipengine.com/v1/address/validate' ,
        {'headers': headers}).then (function(response){
            const view = response.data.Response.View
            if (view.length > 0 && view[0].Result.length > 0){
                const location = view[0].Result[0].Location;

                self.setState({
                    'staus': 'true',
                    'locationId': '',
                    'query': location.Address.Label,
                    'address':{
                        'street': location.Address.HouseNumber + '' + location.Address.Street,
                        'city': location.Address.City,
                        'state':location.Address.State,
                        'postalCode': location.Address.PostalCode,
                        'country': location.Address.country
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
                        <b>Success</b>
                        {/* <img src="error.png" alt="error">Error</img> */}
                    </div>
                );
            }
                else {
                    return (
                        <div className="alert alert-warning" role="alert">
                            <b>Invalid! Try again</b>
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
                   postalCode={this.state.address.postalCode}
                   country={this.state.address.country}
                   onChange={this.onAddressChange}
                   />
<br />
{ result } 
<button type="submit" className="btn btn-primary" onClick={this.onCheck}>Check</button>
<button type="submit" className="btn btn-outline-secondary" onClick={this.onClear}>Clear</button>
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

