import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({
        students: res.data
      })
    })
  }



  render() {
    let mapStudents = this.state.students.map((item, index) => {
      return <Link key={index} to={`/student/${item.id}`}><h3>{item.first_name} {item.last_name}</h3></Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mapStudents}
        <Link to='/'><button>Back to Home</button></Link>
      </div>
    )
  }
}