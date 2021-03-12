import { Component } from 'react'
import { Table, Avatar, Spin, Icon } from 'antd'
import './App.css';
import { getAllStudents } from './client'
import { Container } from './Container'
import { LoadingOutlined } from '@ant-design/icons';


const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class App extends Component{
  
  state = {
    students: [],
    isLoading: false
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    this.setState({
      isLoading: true
    })

    getAllStudents().then(
      res => res.json().then(
        students => {
          this.setState({
            students,
            isLoading: false
          });
        })
      );
  }

  render() {
    const { students, isLoading } = this.state

    if (isLoading) {
      return <Container>
        <Spin indicator={loadingIcon}></Spin>
      </Container>
    }

    if (students && students.length) {

      const columns = [
        {
          title: 'Avatar',
          key: 'avatar',
          render: (text, student) => (
            <Avatar size='large'>
              {
                student.firstname.charAt(0).toUpperCase() +
                student.lastname.charAt(0).toUpperCase()
              }
            </Avatar>
          )
        },
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

      return <Container>
        <Table
          dataSource={students}
          columns={columns}
          pagination={false}
          rowKey='studentId'  
          />
      </Container>
    
    }

    return <h1>No students found</h1>

  }
}

export default App;

