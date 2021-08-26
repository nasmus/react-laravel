import React, { useEffect, useState } from 'react';

import employeeServices from '../../services/Employee';

function Form(){
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [city, setCity] = useState(null)
  const [address, setAddress] = useState(null)
  const [phone, setPhone] = useState(null)
  const [rol, setRol] = useState(null)
  const [listRol, setListRol] = useState([])

  useEffect(() => {
    async function fechtDataRol(){
      const res = await employeeServices.listRole();
      setListRol(res.data)
    }
    fechtDataRol();
    
  }, [])

  const saveEmployee = async () => {
    const data = {
      name, email, city, address, phone, rol
    }
    const res = await employeeSevices.save(data);

    if(res.success) {
      alert(res.message)
    }
    else{
      alert(res.message)
    }

    
  }

  return(
    <div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name employee</label>
          <input type="text" class="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
					<label for="phone">City{city} </label>
					<select id="inputState" class="form-control" onChange={(e) => setCity(e.target.value)}>
             <option selected>Choose...</option>
             <option value="New York">New york</option>
             <option value="London">London </option>
             <option value="Madrid">Madrid </option>
             
          </select>
        </div>
      </div> 

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>

      

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">Phone </label>
          <input type="text" class="form-control" placeholder="123467890" onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
					<label for="phone">Rol{rol} </label>
					<select id="inputState" class="form-control" onChange={(e) => setRol(e.target.value)}>
             <option selected>Choose...</option>
             {
               listRol.map((list) => {
                 return(
                  <option value={list.rol_id} >{list.rol_name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit" onClick={() => saveEmployee()}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form;