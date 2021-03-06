import { update } from 'lodash';
import React, { useEffect, useState } from 'react';

import employeeServices from "../../services/Employee"

function Edit(props){

  const [ id, setId ] = useState(null);
  const [ name, setName ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ city, setCity ] = useState(null);
  const [ address, setAddress ] = useState(null);
  const [ phone, setPhone ] = useState(null);
  const [ rol, setRol ] = useState(null);
  const [ selectedRol , setSelectRol ] = useState(null);
  const [ listRol, setListRol ] = useState([]);

  useEffect(()=>{

    async function fetchDataEmployee(){
      let id = props.match.params.id;
      const res = await employeeServices.get(id);

      if (res.success) {
        console.log(res);
        const data = res.data
        setId(data.id)
        setName(data.name_lastname)
        setEmail(data.email)
        setCity(data.city)
        setAddress(data.direction)
        setPhone(data.phone)
        setRol(data.rol)
        setSelectRol(data.role.rol_name)
      }
      else {
        alert(res.message)
      }
    }
    fetchDataEmployee();

    async function fetchDataRol(){
      const res = await employeeServices.listRole();
      setListRol(res.data)
    }
    fetchDataRol();

  },[])

  const updateEmployee = async() =>{
      const data = {
        id, name, email, city, address, phone, rol
      }
      const res = await employeeServices.update(data)

      if(res.success)
      {
          alert(res.message)
      }
      else{
          alert(res.message)
      }
  }


  return (
    <div>
      <h4>Edit </h4>
      <hr/>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name</label>
          <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com"  value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" placeholder="1234 Main St"  value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">City {city}</label>
          <select id="inputState" class="form-control" value={city} onChange={(e) => setCity(e.target.value)} >
             <option selected>Choose...</option>
             <option value="New York">New York</option>
             <option value="London">London</option>
             <option value="Madrid">Madrid</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Phone </label>
          <input type="text" class="form-control" placeholder="123467890"  value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">Rol</label>
          <select id="inputState" class="form-control" value={rol} onChange={(e) => setRol(e.target.value)} >
             {
               listRol.map((itemselect)=>{
                 return(
                   <option value={itemselect.rol_id}>{itemselect.rol_name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit" onClick={()=>updateEmployee()} >Save</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;
