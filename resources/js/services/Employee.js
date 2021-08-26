const baseUrl = "http://127.0.0.1:8000/api/employee";
import axios from 'axios';
const employee = {};


employee.listRole = async () => {
    const urlList = baseUrl+"/role"
    const res = await axios.get(urlList)
    .then( response => {
        return response.data;
    })
    .catch( err => {
        return err;
    })
    return res;
}

employee.save = async(data) => {
    const urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave,data)
    .then(response => {
        return response.data;
    })
    .catch( err => {
        return err;
    })
    return res;
}

employee.listEmployee = async() => {
    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res;
}

employee.get = async (id) => {

    const urlGet = baseUrl+"/get/"+id
    const res = await axios.get(urlGet)
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res
  }

employee.update = async (data) => {
    const urlupdate = baseUrl+"/update/"+data.id
    const res = await axios.put(urlupdate,data)
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res
}

employee.delete = async (id) => {
    const urlDelete = baseUrl+"/delete/"+id
    const res = await axios.delete(urlDelete)
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res
}
export default employee