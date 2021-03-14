import { Formik } from 'formik';
import { Input, Button, Tag } from 'antd';
import { addStudent } from '../client'
import './AddStudentForm.sass';


const AddStudentForm = props =>  (
    <Formik
        initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}

        validate={values => {

            const errors = {};

            if (!values.email) {
                errors.email = 'Email required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.gender) {
                errors.gender = 'Gender required';
            } else if (
                !['Male', 'Female'].includes(values.gender)
            ) {
                errors.gender = 'Gender must be Male or Female';
            }

            if (!values.firstName) {
                errors.firstName = 'FirstName required';
            }

            if (!values.lastName) {
                errors.lastName = 'LastName required';
            }

            return errors;
        }}

        onSubmit={(student, { setSubmitting }) => {
            addStudent(student)
            .then(
                () => {
                    props.onSuccess();
                    setSubmitting(false);
                }
            )
        }}

    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            submitForm
            /* and other goodies */
        }) => (
        
            <form className="send-student" onSubmit={handleSubmit}>

                <label>
                    <span className="title">FirstName</span>
                    <Input
                        name="firstName"
                        placeholder="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName} />

                    {errors.firstName && touched.firstName && <Tag>{errors.firstName}</Tag>}

                </label>
                
                <label>
                    <span className="title">LastName</span>
                    <Input
                        name="lastName"
                        placeholder="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName} />
                    
                    {errors.lastName && touched.lastName && <Tag>{errors.lastName}</Tag>}
                    
                </label>

                <label>
                    <span className="title">Email</span>
                    <Input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} />
                    
                    {errors.email && touched.email && <Tag>{errors.email}</Tag>}
                    
                    
                </label>
                
                <label>
                    <span className="title">Gender</span>
                    <Input
                        name="gender"
                        placeholder="gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender} />
                    
                    {errors.gender && touched.gender && <Tag>{errors.gender}</Tag>}
                    

                </label>
                
                <Button 
                    onClick={() => submitForm()}
                    disabled={isSubmitting}>Submit</Button>

            </form>
        )}
    </Formik>
)
    
 
 
 export default AddStudentForm;
