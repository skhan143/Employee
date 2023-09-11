import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees from your API
    axios.get('https://localhost:5085/api/employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName}
            <Link to={`/employee/${employee.id}`}>Details</Link>
            <Link to={`/employee/${employee.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/employee/create">Create New Employee</Link>
    </div>
  );
};

export default EmployeeList;
