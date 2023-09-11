import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // Import useParams and useHistory
import axios from 'axios';

const EditEmployee = () => {
  const { id } = useParams();
  const history = useHistory();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    // Add other employee properties and initialize them as needed
  });

  useEffect(() => {
    // Fetch the employee data by ID from your API
    axios.get(`https://localhost:5085/api/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated employee data to your API
    axios.put(`https://localhost:5085/api/employees/${id}`, employee)
      .then((response) => {
        console.log('Employee updated:', response.data);
        // You can add a redirect or any other logic here
        history.push('/employee-list'); // Redirect to the employee list page or another route
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
      });
  };

  return (
    <div>
      <h2>Edit Employee Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more input fields for other employee properties */}
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
