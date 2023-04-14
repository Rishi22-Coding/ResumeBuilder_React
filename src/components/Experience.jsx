import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

const Experience = () => {
  const [education, setEducation] = useState([
    { company: "", year: "", designation: "" },
  ]);

  const handleAddField = () => {
    const values = [...education];
    values.push({ company: "", year: "", designation: "" });
    setEducation(values);
  };

  const handleRemoveField = (index) => {
    const values = [...education];
    values.splice(index, 1);
    setEducation(values);
  };

  const handleChange = (index, event) => {
    const values = [...education];
    values[index][event.target.name] = event.target.value;
    setEducation(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-3">Experience</h3>
      <Form onSubmit={handleSubmit}>
        {education.map((field, index) => (
          <div key={index}>
            <FormGroup>
              <FormLabel>company</FormLabel>
              <FormControl
                type="text"
                name="Company"
                value={field.company}
                onChange={(event) => handleChange(index, event)}
                required
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Year</FormLabel>
              <FormControl
                type="text"
                name="year"
                value={field.year}
                onChange={(event) => handleChange(index, event)}
                required
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Designation</FormLabel>
              <FormControl
                type="text"
                name="designation"
                value={field.designation}
                onChange={(event) => handleChange(index, event)}
                required
                className="form-control"
              />
            </FormGroup>
            {index > 0 && (
              <Button
                type="button"
                variant="danger"
                onClick={() => handleRemoveField(index)}
                className="ml-2 my-3"
              >
                Remove
              </Button>
            )}
          </div>
        ))}
        
        <Button
          type="button"
          variant="success"
          onClick={handleAddField}
          className="my-3 mx-2"
        >
          Add More
        </Button>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Experience;
