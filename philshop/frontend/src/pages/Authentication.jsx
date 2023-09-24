import { useState } from "react";
import axios from "axios";
import login from "../scripts/login";
const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const register = async ({ username, password, email, status }) => {
    const user = {
      username: username,
      password: password,
      email: email,
      status: status,
    };
    const response = await axios.post(
      "http://localhost:8000/api/register-user/",
      user
    );
    console.log(response);
    await login({ username: username, password: password });
  };

  return (
    <div className="auth-page">
      <div className="auth-intro-container row">
        <div className="hero">
          <h1 className="title">The Best Filipino Online Shop</h1>
          <p>
            Browse through a curated collection of high-quality products that
            showcase the heart and soul of the Philippines. From intricately
            handwoven textiles to delectable delicacies, we've handpicked every
            item to offer you an authentic taste of Filipino artistry and
            heritage.
          </p>
        </div>
        <div className="auth-container">
          <div className="auth-buttons row">
            <h3
              className={isLogin ? "selected" : ""}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Login
            </h3>
            <h3
              className={isLogin ? "" : "selected"}
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Register
            </h3>
          </div>

          <Register isHide={isLogin} register={register} />
          <Login isHide={!isLogin} />
        </div>
      </div>
    </div>
  );
};

const Login = ({ isHide }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    login({ username: username, password: password });
  };
  return (
    <div className={`login-container ${isHide ? "hide" : "visible"}`}>
      <form action="">
        <div className="col">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Register = ({ isHide, register }) => {
  const handleClick = () => {
    console.log({
      username: username,
      email: email,
      password: password,
      status: "test status",
    });
    register({
      username: username,
      email: email,
      password: password,
      status: "test status",
    });
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div className={`register-container ${isHide ? "hide" : "visible"}`}>
      <div className="col">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="col">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="col">
        <label htmlFor="password1">Confirm Password:</label>
        <input type="password1" name="password1" id="password1" />
      </div>
      <div className="col">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button onClick={handleClick}>Register</button>
    </div>
  );
};

export default Authentication;
