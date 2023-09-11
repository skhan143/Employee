import React, { useState } from 'react';
import axios from 'axios';


const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    // Add other employee properties and initialize them as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the employee data to your API for creation
    axios.post('https://localhost:5085/api/employees', employee)
      .then((response) => {
        console.log('Employee created:', response.data);
        // You can add a redirect or any other logic here
        // For example, redirect to the employee list page
        // history.push('/employee-list');
      })
      .catch((error) => {
        console.error('Error creating employee:', error);
      });
  };

  return (
    <div>
      <h2>Create New Employee</h2>
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
        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
