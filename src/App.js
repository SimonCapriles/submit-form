import './App.css';
import {useFormik} from "formik";

function validateEmail(email) {
  const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase())
}

function App() {
  const formik = useFormik({
    // Form values definition
    initialValues: {
      email: '',
      password: ''
    },
    // On Submit actions
    onSubmit: () => {
      console.log(formik.values)
      if (Object.keys(formik.errors).length === 0){
        alert('Login successful')
      }
    },
    // Form values validation definition
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required'
      } else {
        if (!validateEmail(values.email)) {
          errors.email = 'Username should be an email'
        }
      }
      if (!values.password) errors.password = 'Required';
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        <div style={{color: 'red'}}>{formik.errors.email}</div>
        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        <div style={{color: 'red'}}>{formik.errors.password}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
