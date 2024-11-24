import { useFormik } from "formik";

const ConsultPage = () => {
  const formik = useFormik({
    initialValues: {
      age: "",
      city: "",
      occupation: "",
      allergies: "",
      diet: "",
      stress: "",
    },
    onSubmit: (values) => {
      console.log(values); // Handle form submission
    },
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Consult with Us</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Age:</label>
          <input type="number" name="age" onChange={formik.handleChange} value={formik.values.age} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" onChange={formik.handleChange} value={formik.values.city} />
        </div>
        <div>
          <label>Occupation:</label>
          <input type="text" name="occupation" onChange={formik.handleChange} value={formik.values.occupation} />
        </div>
        <div>
          <label>Allergies:</label>
          <textarea name="allergies" onChange={formik.handleChange} value={formik.values.allergies} />
        </div>
        <div>
          <label>Is your diet regular?</label>
          <select name="diet" onChange={formik.handleChange} value={formik.values.diet}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label>Do you suffer from stress?</label>
          <select name="stress" onChange={formik.handleChange} value={formik.values.stress}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConsultPage;