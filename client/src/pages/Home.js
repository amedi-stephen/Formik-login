import { useFormik } from "formik";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: {
        month: "",
        day: "",
        year: "",
      },
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be more than 15 characters";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 15) {
        errors.lastName = "Must be more than 15 characters";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
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
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
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
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
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
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <select
          id="month"
          name="month"
          value={formik.values.dateOfBirth.month}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
        </select>
        <select
          id="day"
          name="day"
          value={formik.values.dateOfBirth.day}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <select
          id="year"
          name="year"
          value={formik.values.dateOfBirth.year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
        </select>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {/* <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div> */}
      <button type="submit">Register</button>
    </form>
  );
};

export default Home;
