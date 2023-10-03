import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [employee, setEmployee] = useState({
    id: "",
    full_name: "",
    address: "",
    email_id: "",
  });

  //Handle the form Inputs
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setEmployee({ ...employee, [name]: value });
  };

  //Clear the form
  const clearForm = (e) => {
    e.preventDefault();
    setEmployee({ id: "", full_name: "", address: "", email_id: "" });
  };


  //Save Employee to the DB
  const saveEmployee = (e) => {
    e.preventDefault();
    if (employee.email_id !== "") {
      EmployeeService.saveEmployee(employee)
        .then((response) => {
          console.log(response);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("fill the form");
    }

    setEmployee({ id: "", full_name: "", address: "", email_id: "" });
  };

  const navigate = useNavigate();

  return (
    <div className=" container  mx-auto max-w-md mt-4 px-3  rounded-lg bg-slate-800">
      <h1 className="text-3xl text-slate-400 font-thin select-none">
        Add Employees
      </h1>
      <form className="p-3 mt-4 pb-8">
        <div className=" ">
          <h1 className="block text-slate-400 text-md">Full Name</h1>
          <input
            name="full_name"
            type="text"
            value={employee.full_name}
            onChange={(e) => handleChange(e)}
            className="outline-0 text-slate-200 bg-slate-700 border-0  text-sm w-8/12 shadow-md p-1 hover:shadow-inner rounded-md mt-2"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="pt-3">
          <h1 className="block text-slate-400 text-md">Address</h1>
          <input
            name="address"
            type="text"
            value={employee.address}
            onChange={(e) => handleChange(e)}
            className="bg-slate-700 outline-0 text-slate-200 text-sm w-8/12 border-0 shadow-md p-1 hover:shadow-inner rounded-md mt-2"
            placeholder="Enter Address"
          />
        </div>
        <div className="pt-3">
          <h1 className="block text-slate-400 text-md">Email</h1>
          <input
            name="email_id"
            type="email"
            value={employee.email_id}
            onChange={(e) => handleChange(e)}
            className="bg-slate-700 outline-0 text-slate-200 text-sm w-8/12 border-0 shadow-md p-1 hover:shadow-inner rounded-md mt-2"
            placeholder="Enter Email"
          />
        </div>

        <div className="flex justify-start pt-3 gap-3 mt-3">
          <button
            onClick={saveEmployee}
            className="bg-green-700 px-3 pt-1 pb-1 rounded-md font-semibold shadow-lg transition duration-300 hover:shadow-green-600 text-white"
          >
            Save
          </button>
          <button
            onClick={clearForm}
            className="bg-red-700 px-3 pt-1 pb-1 rounded-md font-semibold shadow-lg transition duration-300 hover:shadow-red-600 text-white"
          >
            Clear
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-700 px-3 pt-1 pb-1 rounded-md font-semibold shadow-lg transition duration-300 hover:shadow-blue-600 text-white"
          >
            Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
