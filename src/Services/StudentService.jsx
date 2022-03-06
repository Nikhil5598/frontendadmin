import axios from 'axios';

const studenturl = "http://localhost:8080/api/v1/employees";

class StudentService {

    getEmployees(){
        return axios.get(studenturl);
    }

    // createEmployee(employee){
    //     return axios.post(studenturl, employee);
    // }

    // getEmployeeById(employeeId){
    //     return axios.get(studenturl + '/' + employeeId);
    // }

    // updateEmployee(employee, employeeId){
    //     return axios.put(studenturl + '/' + employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(studenturlL + '/' + employeeId);
    // }
}

export default new StudentService()