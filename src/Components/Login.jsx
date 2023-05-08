import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, FormGroup } from "react-bootstrap";
import '../css/login.css';
import TextField from '@mui/material/TextField';
import { loginPage,registerAccount } from "../Services/LoginService";

function LoginComponent() {
    const navigate = useNavigate();
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameRegister, setUsernameRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
  
    const IsRegister = () => {
      // Logic to handle registration
      setIsRegisterOpen(!isRegisterOpen); 
    };

    const callbacklogin = (data) => {
      if(data.statusCode === 200) {
        toast.success("Đăng nhập thành công!", {className: 'toast-message'});
        localStorage.userId = data.userId;
        localStorage.role = data.role;
        localStorage.username = data.username;
        localStorage.token = data.token;
        navigate('/home');
      } else {
        toast.error("Tên đăng nhập hoặc mật khẩu không đúng!", {className: 'toast-message'});
      }
    }

    const callbackRegister = (res) => {
        if(res.statusCode === 200) {
          IsRegister();
          toast.success("Đăng ký thành công!", {className: 'toast-message'});
        } else {
        toast.error("Có lỗi trong quá trình xử lý!", {className: 'toast-message'});
        }
    }

    function HandleRegister() {
        try {
          registerAccount(callbackRegister, {
            username: usernameRegister,
            password: passwordRegister
          });
        } catch {
          toast.error("Có lỗi trong quá trình xử lý!", {className: 'toast-message'});
        }
      };

    async function handleLogin() {
      // Logic to handle login
      try {
        await loginPage(callbacklogin, {
          username: username,
          password: password
        })
      } catch {
        toast.error("Có lỗi trong quá trình đăng nhập!", {className: 'toast-message'});
      }
    };
   
    return (
      <div className="login">
        <div className="login-box">
          {/* <Navbar>
            <Navbar.Brand>Login Page</Navbar.Brand>
          </Navbar> */}
          {isRegisterOpen ? (
            <Form className="form-middle">
            <h1>Register</h1>
            <FormGroup className="form-middle-group">
              {/* <label className="form-middle-label" htmlFor="">Username</label> */}
              <TextField 
                  id="filled-basic" 
                  label="Username" 
                  variant="filled" 
                  className='form-input-add'
                  onChange={(e) => setUsernameRegister(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form-middle-group">
              {/* <label className="form-middle-label" htmlFor="">Password</label> */}
              <TextField 
                  id="filled-basic" 
                  label="Password"
                  type="password"
                  variant="filled" 
                  className='form-input-add'
                  onChange={(e) => setPasswordRegister(e.target.value)}
              />
            </FormGroup>
            <button className="button-submit" onClick={HandleRegister}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              confirm
            </button>
            <div className="text-register">
              Go back? <a onClick={IsRegister} href="#">Login</a>
            </div>
          </Form>
          ) : (
            <Form className="form-middle">
              <h1>Login</h1>
              <FormGroup className="form-middle-group">
                {/* <label className="form-middle-label" htmlFor="">Username</label> */}
                <TextField 
                    id="filled-basic" 
                    label="Username" 
                    variant="filled" 
                    className='form-input-add'
                    onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form-middle-group">
                {/* <label className="form-middle-label" htmlFor="">Password</label> */}
                <TextField 
                    id="filled-basic" 
                    label="Password"
                    type="password"
                    variant="filled" 
                    className='form-input-add'
                    onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <div className="button-submit" onClick={handleLogin}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                submit
              </div>
              <div className="text-register">
              Do you need a new account? <a onClick={IsRegister} href="#">Register</a>
              </div>
            </Form>
          )}
        </div>
      </div>
    );
}

export default LoginComponent;