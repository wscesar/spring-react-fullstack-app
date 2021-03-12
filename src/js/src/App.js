import { Component } from 'react'
import { Table } from 'antd'
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
          this.setState({students});
        })
      );
  }

  render() {
    const { students } = this.state

    if (students && students.length) {

      const columns = [
        {
          title: 'Student Id',
          dataIndex: 'studentId',
          key: 'studentId',
        },
        {
          title: 'First Name',
          dataIndex: 'firstname',
          key: 'firstname',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastname',
          key: 'lastname',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        }
        ,
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        }
      ]

      return <Table
        dataSource={students}
        columns={columns}
        rowKey='studentId'  
        />
    
    }

    return <h1>No students found</h1>

  }
}

export default App;

