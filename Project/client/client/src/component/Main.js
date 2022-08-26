// Access the API you built
// Store the API results in the state
// Render Bootstrap cards reflecting the information provided from the server

import React, { Component } from 'react'
import axios from 'axios'
import {Card, Button} from "react-bootstrap";

export default class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userData: []
      }
    }
    handleUser = async() => {
        const API = 'http://localhost:3002/users'
        const res = await axios.get(API);
        this.setState({userData: res.data})

    }
  render() {
    return (
        <div className ="wholeThing">
        {this.state.userData.map((user, idx)=> {
            return(
            <div key = {idx}>
            <Card style = {{width:"18rem", margin: '10px', border: "3px blue solid"}}>
            <Card.Header style = {{width: "18rem", color:'blue', fontWeight: 'bold'}}>{user.username}</Card.Header>
            <Card.Body>
            <Card.Text><b>Email:</b> {user.email}<br/>
                       <b>Bio:</b> {user.bio}<br/>
                       <b>Region:</b> {user.region}</Card.Text>
            </Card.Body>
            </Card>
            </div>
            )
          })}
          <Button onClick = {this.handleUser} variant = "danger">Click for Users</Button>
          
        </div>
        )
  }
}
