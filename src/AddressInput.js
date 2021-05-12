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
            <AddressItem label="o Street Address" id="street" value={this.props.street} onChange={this.handleChange} placeholder=""/>
            <AddressItem label="o Street Address 2" id="street" value={this.props.street} onChange={this.handleChange} placeholder=""/>
            <AddressItem label="o City" id="city" value={this.props.city} onChange={this.handleChange} placeholder=""/>    
            <AddressItem label="o State (two letters)" id="state" value={this.props.state} onChange={this.handleChange} placeholder=""/>   
            <AddressItem label="o Zip Code" id="zipcode" value={this.props.zipcode} onChange={this.handleChange} placeholder=""/> 
            </div></div>
        );
    }
}

export default Addressinput;