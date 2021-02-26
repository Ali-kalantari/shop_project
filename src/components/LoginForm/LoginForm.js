import React, { useState } from "react";
import Input from "./Input";
import Error from "./Error";
import "./LoginForm.css";
// import axios from "axios";

const LoginForm = () => {
  const [data, setdata] = useState({});
  const [error_user, seterror_user] = useState("");
  const [error_pass, seterror_pass] = useState("");
  const [error_status, seterror_status] = useState(true);
  const [user_data, setuser_data] = useState({});

  const handlechange = (name, value) => {
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    validation();
  };
  
  const validation = () => {
    if (!data.Username) {
      seterror_user("نام کاربری را وارد کنید");
      seterror_status(true)
    }
    if (!data.Password) {
      seterror_pass("رمز عبور را وارد کنید ");
      seterror_status(true)
    }
    if (data.Password && data.Password.trim().length <= 7) {
      seterror_pass("رمز عبور باید بیش از 7 کاراکتر باشد");
      seterror_status(true)
    }
    if (data.Username && data.Username.trim().length <= 3) {
      seterror_user("نام کاربری باید از 3 کاراکتر بیشتر باشد");
      seterror_status(true)
    }
    if (data.Username && data.Username.trim().length > 3) {
      seterror_user("");
      seterror_status(false)
    }
    if (data.Password && data.Password.trim().length > 7) {
      seterror_pass("");
      seterror_status(false)
    }
    
    if(error_status === false){
      
        setuser_data({
          name: data.Username,
          pass: data.Password,
        });
      console.log(user_data);

      }
     
  };

  const send_data = () => {
    if(user_data.name && user_data.pass){

      // axios.post("url" , user_data).then(res=>{
    // if (res.ok === true) {
    //   localStorage.setItem("login", true);
    //   props.history.push('/')
    // }
    // }).catch(err =>{
    //   console.log(err)
    // })
    }
    
  };

  return (
    <React.Fragment>
      <div className="container-login">
        <section id="content">
          <form onSubmit={submit}>
            <h1 id="enter">ورود</h1>
            <Input
              onChange={handlechange}
              name={"Username"}
              type={"text"}
              placeholder={" ...نام کاربری "}
            />
            <Error error={error_user} />
            <Input
              onChange={handlechange}
              name={"Password"}
              type={"password"}
              placeholder={" ...رمز عبور "}
            />
            <Error error={error_pass} />

            <button type="submit" className="button btn btn-md btn-warning">
              ورود
            </button>
          </form>
        </section>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
