import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handlerFormSubmit = () => {
    console.log(formData);
    if (isLogin) {
      if (formData.phone && formData.password) {
        navigate("/home");
      } else {
        alert("Please fill all the details");
      }
    } else {
      if (formData.name && formData.phone && formData.password) {
        setIsLogin(true);
      } else {
        alert("Please fill all the details");
      }
    }
  };
  return (
    <>
      <div className="loginWrapperContainer">
        <div className="container loginContainer">
          <div className="loginBox p-4">
            <div className="loginTitleBox">
              <h2 className="loginTitle">{isLogin ? "Login" : "Register"}</h2>
              <i
                className="fa-solid fa-xmark closeButton"
                onClick={() => setLoginModal(false)}
              ></i>
            </div>
            <div className="loginFormBox py-4">
              <form onSubmit={handlerFormSubmit}>
                {!isLogin && (
                  <>
                    <div className="mb-3">
                      <input
                        type="text"
                        inputMode="text"
                        className="form-control px-3"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        inputMode="email"
                        className="form-control px-3"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        inputMode="email"
                        className="form-control px-3"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      />
                    </div>
                  </>
                )}
                <div className="mb-3 mobileInputBox">
                  <div className="mobileRightBox">
                    <img
                      src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
                      alt=""
                    />
                    <div>+91</div>
                  </div>
                  <input
                    type="number"
                    pattern="[0-9]{1}"
                    inputMode="numeric"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Mobile Number "
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    inputMode="text"
                    className="form-control px-3"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  {isLogin ? "Login" : "Register"}
                </button>
              </form>
            </div>
            <div className="navigationBox py-3">
              <span className="navigationTitle">
                {isLogin ? "New to Foodie?" : "Already have an account?"}
              </span>
              <a
                href="#"
                className="navigationLink anchorText"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create Account" : "Login"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
