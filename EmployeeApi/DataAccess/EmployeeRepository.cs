// EmployeeApi/DataAccess/EmployeeRepository.cs
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Data.SqlClient; // Make sure to include this namespace

public class EmployeeRepository
{
    private readonly IDbConnection _dbConnection;

    public EmployeeRepository(string connectionString)
    {
        _dbConnection = new SqlConnection(connectionString);
    }

    public async Task<IEnumerable<Employee>> GetAllEmployeesAsync()
    {
        try
        {
            await ((SqlConnection)_dbConnection).OpenAsync();
            var employees = await _dbConnection.QueryAsync<Employee>("SELECT * FROM Employees");
            return employees;
        }
        catch (Exception ex)
        {
            // Handle the exception or log it for troubleshooting.
            // For now, rethrow it to propagate the error.
            throw;
        }
        finally
        {
            _dbConnection.Close();
        }
    }
}
