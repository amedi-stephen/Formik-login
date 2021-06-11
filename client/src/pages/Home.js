import { useFormik } from "formik";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: (values) => {
     const errors = {};
     if(!values.firstName) {
       errors.firstName="Required";
     } else if(values.firstName.length > 15) {
       errors.firstName="Must be more than 15 characters";
     } 

     if(!values.lastName) {
       errors.lastName = "Required";
     } else if(values.lastName.length > 15) {
       errors.lastName="Must be more than 15 characters";
     }
     
     if(!values.email) {
       errors.email = "Required";
     } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errors.email="Invalid email address";
     }
     return errors;
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Sign up</h4>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          placeholder="e.g. john"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          placeholder="e.g. doe"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (<div>{formik.errors.lastName}</div>): null}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          placeholder="e.g. johndoe@gmail.com"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <select>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
        </select>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <select>
          <option>1996</option>
          <option>1995</option>
          <option>1994</option>
          <option>1994</option>
        </select>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Home;
