import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    {
      name: "Geraldine Demo",
      email: "geraldine@gmail.com",
      phone: "0700000001",
      skills: "C++, Golang, Javascript, HTML & CSS",
      avatar: "https://i.imgur.com/TUhCrsY.png",
    },

    {
      name: "Dan Foss",
      email: "dan@gmail.com",
      phone: "0700000002",
      skills: "Adobe xd, C#, Asp.net, Python",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },

    {
      name: "Merylin Monroe",
      email: "merylin@gmail.com",
      phone: "0700000003",
      skills: "C++, Python, AI, IOT",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
  ]);

  function handleAddNewEmp() {
    setEmployees((prevState) => {
      return [
        ...prevState,
        {
          name: "Merlin Sherwood",
          email: "merlin@gmail.com",
          phone: "0700000004",
          skills: "Java, Javascript, c#, HTML",
          avatar: "https://i.imgur.com/Q9qFt3m.png",
        },
      ];
    });
  }

  return (
    <div>
      <h3>EmployeeList</h3>
      <button onClick={handleAddNewEmp} className ="button">Add Employee</button>
      {employees.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
      ;
    </div>
  );
}

export default EmployeeList;
