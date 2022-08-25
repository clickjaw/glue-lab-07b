import React, { Component } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button'




export default class User extends Component {

    handleChange = async() =>{
        const API = 'http://localhost:3002/'
        let res = await axios.get(API);
        console.log(res)
    }

  render() {
    return (
        <Button onClick = {this.handleChange}>ping</Button>
        )
  }
}

