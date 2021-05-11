import React, { Component } from 'react';
import AddressItem from './AddressItem';

class Addressinput extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(evt){
        this.props.onChange(evt);
    }

    render (){
        return (

            <div className="card"><div className="card-body">
            <AddressItem label="Street" id="street" value={this.props.street} onChange={this.handleChange} placeholder=""/>
            <AddressItem label="City" id="city" value={this.props.city} onChange={this.handleChange} placeholder=""/>    
            <AddressItem label="State" id="state" value={this.props.state} onChange={this.handleChange} placeholder=""/>   
            <AddressItem label="Zip Code" id="zipcode" value={this.props.zipcode} onChange={this.handleChange} placeholder=""/> 
            </div></div>
        );
    }
}

export default Addressinput;