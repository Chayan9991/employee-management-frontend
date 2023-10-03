import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";

const EmployeeList = () => {
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  const deleteEmployee=(e, id)=>{
    e.preventDefault(); 
    EmployeeService.deleteEmployee(id).then((res)=>{
      if(employees){
        setEmployees((prevElement)=>{
          return prevElement.filter((emp)=>emp.id !== id); 
        })
      }
    })

  }
  const navigate = useNavigate(); 
  return (
    <>
      <div className=" mt-4 max-w-5xl mx-auto  rounded-lg bg-slate-800">
        <div className="flex justify-between ">
          <h1 className="text-3xl px-3 text-slate-400 font-thin select-none  ">
            Employee List
          </h1>
          <button onClick={()=>navigate('/addEmployee')} className="bg-blue-700 px-3 pt-1 pb-1 rounded-md mt-2 mx-2 font-semibold shadow-lg transition duration-300 hover:shadow-blue-600 text-white">
            Add Employee
          </button>
        </div>
        <div className="mt-10 px-3 flex">
          <table className="min-w-full ">
            <thead className="bg-slate-700">
              <tr>
                <th className="font-medium text-left text-slate-300 uppercase">
                  Full Name
                </th>
                <th className="font-medium text-left text-slate-300 uppercase">
                  Address
                </th>
                <th className="font-medium text-left text-slate-300 uppercase">
                  Email Id
                </th>
                <th className="font-medium text-center text-slate-300 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            {!loading && (
              <tbody className="">
                {employees.map((emp) => (
                  <Employee emp={emp} key={emp.id} deleteEmployee={deleteEmployee}/>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
