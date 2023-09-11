import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import Route, not Switch
import './App.css';
import EmployeeList from './Components/EmployeeList';
import CreateEmployee from './Components/CreateEmployee';
import EditEmployee from './Components/EditEmployee';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact Component={EmployeeList} />
        <Route path="/create" Component={CreateEmployee} />
        <Route path="/edit/:id" Component={EditEmployee} />
        <Route path="/details/:id" Component={EmployeeDetails} />
      </Router>
    </div>
  );
}

export default App;
