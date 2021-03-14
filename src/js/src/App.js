import { Component } from 'react'
import { Table, Avatar, Spin, Modal, Empty } from 'antd'
import './App.css';
import { getAllStudents } from './client'
import { Footer } from './Footer'
import { LoadingOutlined } from '@ant-design/icons';
import AddStudentForm from './forms/AddStudentForm';
import { errorNotification } from './Notification'


const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class App extends Component{
  
  state = {
    students: [],
    isLoading: false,
    isModalVisible: false
  }

  openModal = () => this.setState({isModalVisible: true});
  closeModal = () => this.setState({isModalVisible: false});

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    this.setState({
      isLoading: true
    });

    getAllStudents()
      .then( res => res.json()
      .then( students => {
          console.log(students)
          this.setState({
            students: students,
            isLoading: false
          });
        })
      )
      .catch(err => {
        // alert('catch')
        // console.log(err)
        // console.log(err.error)
        // console.log(err.error.message)
        // errorNotification(err.error, err.error)
        this.setState({
          isLoading: false
        });
      })
  }

  render() {
    const { students, isLoading, isModalVisible } = this.state;

    const commonElements = () => (
      <div>
        <Modal
            title="Add Student"
            visible={isModalVisible}
            onOk={this.closeModal}
            onCancel={this.closeModal}
            width={1000} >
            
            <AddStudentForm 
              onSuccess={() => {
                this.closeModal();
                this.fetchStudents();
              }} />

          </Modal>

          <Footer handleClick={this.openModal} />
      </div>
    )

    if (isLoading) {
      return <Spin indicator={loadingIcon}></Spin>
    }

    if (students && students.length) {

      const columns = [
        {
          title: 'Avatar',
          key: 'avatar',
          render: (text, student) => (
            <Avatar size='large'>
              {
                student.firstName.charAt(0).toUpperCase() +
                student.lastName.charAt(0).toUpperCase()
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
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
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

      const style = {
        width: '1200px',
        margin: '15px auto',
        maxWidth: 'calc(100% - 30px)',
        maxHeight: 'calc(100vh - 130px)',
        textAlign: 'center'
      }

      const style2 = {
        float: 'left',
        paddingBottom: '100px',
        width: '100%',
      }

      return <div>
          <div style={style2}>
            <div style={style}>
              <Table
                dataSource={students}
                columns={columns}
                pagination={false}
                rowKey='studentId' />
            </div>
          </div>
          {commonElements()}
        </div>
    
    }

    return (
      <div>
        <Empty description = {<h1>No students found</h1>} />
        {commonElements()}
      </div>
    )

  }
}

export default App;

