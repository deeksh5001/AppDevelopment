import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import { editUser, getUserbyId } from "../../service/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isEnabled, setisEnabled] = useState("");
  const { id } = useParams();

  const fetchUser = async () => {
    const res = await getUserbyId(id);
    setName(res.data.name);
    setEmail(res.data.email);
    setPassword(res.data.password);
    setRole(res.data.role);
    setisEnabled(res.data.isEnabled);
  };
  useEffect(() => {
    fetchUser();
  },[]);
  return (
    <div className="d-flex-c">
      <Topbar/>
     

      <div className="update-container">
      <Link to ='/admin'><button className="btn btn-warning">BACK</button></Link>
        <form>
          <h3 className="text-center">Update user</h3>
          <br />
          <div class="form-group row">
            <label for="username" class="col-sm-2 col-form-label">
             <b> Username</b>
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">
            <b>Email</b>
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <br />
       
          <div class="form-group row">
  <label for="password" class="col-sm-2 col-form-label">
    <b>Password</b>
  </label>
  <div class="col-sm-10">
    <input
      type="password"
      class="form-control"
      id="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
</div><br/>
          <div class="form-group row">
            <label for="role" class="col-sm-2 col-form-label">
              <b>Role</b>
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="role"
                placeholder="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div class="form-group row">
            <label for="isEnabled" class="col-sm-2 col-form-label">
              <b>Active? True/False</b>
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="isEnabled"
                placeholder="Email"
                value={isEnabled}
                onChange={(e) => setisEnabled(e.target.value)}
              />
            </div>
          </div>
          <br/>
          <div className="text-center">          
          <Link to ='/admin'><button className="btn btn-danger">CANCEL</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-info" onClick={()=>editUser(id,{name,email,password,isEnabled,role})}>SUBMIT</button> 
          </div>

        </form>
      </div>
    </div>
  );
};


export default Update;
