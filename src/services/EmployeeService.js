import axios from "axios";

const EMP_ADD_URL = "http://localhost:8080/api/v1/addEmp"; 
const EMP_GET_URL = "http://localhost:8080/api/v1/getEmp";
const EMP_DELETE_URL = "http://localhost:8080/api/v1/deleteEmp"; 

//The file which handles the API 

class EmployeeService{
      saveEmployee(employee){
        return axios.post(EMP_ADD_URL, employee); 
      }
      getEmployee(){
        return axios.get(EMP_GET_URL); 
      }
      deleteEmployee(id){
        return axios.delete(EMP_DELETE_URL+"/"+id); 
      }
}
export default new EmployeeService();