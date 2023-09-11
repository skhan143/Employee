import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // Only import useHistory once
import axios from 'axios';


const EmployeeDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [employee, setEmployee] = useState({});

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

  const handleDelete = () => {
    // Delete the employee by ID from your API
    axios.delete(`https://localhost:5085/api/employees/${id}`)
      .then(() => {
        console.log('Employee deleted');
        // You can add a redirect or any other logic here
        history.push('/'); // Redirect to the employee list page or another route
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <p>First Name: {employee.firstName}</p>
      <p>Last Name: {employee.lastName}</p>
      {/* Display other employee details */}
      
      <button onClick={handleDelete}>Delete Employee</button>
    </div>
  );
};

export default EmployeeDetails;
