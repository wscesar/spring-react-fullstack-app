import { Component } from 'react'
import './App.css';
import { getAllStudents } from './client'


class App extends Component{
  state = {
    students: []
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    getAllStudents().then(
      res => res.json().then(
        students => {
          console.log(students)
          this.setState({
            students
          });
        })
      );
  }

  render() {
    return <h1>Hello from react</h1>
  }
}

export default App;

