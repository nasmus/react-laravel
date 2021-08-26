import React, { useEffect, useState } from 'react';
import employeeServices from '../../services/Employee';
import { Link } from 'react-router-dom';

function List(){

  const [listEmployee, setListEmployee] = useState([]);

  useEffect(() => {
    async function fatchDataEmployee() {
      const res = await employeeServices.listEmployee();
      setListEmployee(res.data);
    }
    fatchDataEmployee();
    console.log(listEmployee)
  }, [])

  const onClickDelete = async(i,id) => {
    var yes = confirm("r u sure to delete this item");
    if(yes === true)
    {
      const res = await employeeServices.delete(id)

      if(res.success)
      {
        alert(res.message)
        const newList = listEmployee
        newList.splice(i,1)
        setListEmployee(newList)
      }
      else
      {
        alert(res.message)
      }
    }
  }

  return (
    <section>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Admin</th>
            <th scope="col">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {
            listEmployee.map((item,i) => {
              return(
            <tr>
              <th scope="row">{i}</th>
              <td>{item.name_lastname}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.direction}</td>
              <td>{item.phone}</td>
              <td>{item.role.rol_name}</td>

              
              <td>
                <Link to={"/employee/edit/"+item.id} class="btn btn-light"> Edit </Link>
                <a href="#" class="btn btn-danger" onClick={()=>onClickDelete(i,item.id)}> Delete </a>
              </td>
            </tr>
              )
            })
          }
        
          

        </tbody>
      </table>
    </section>
  )
}

export default List;
