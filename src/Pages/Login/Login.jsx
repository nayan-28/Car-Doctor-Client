import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";
const Login = () => {
  const { SignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const user = { email };
        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res);
        });

        // navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold">Login now</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <p className="my-4 text-center">
                New to Car Doctors ?
                <Link className="text-orange-600 font-bold" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
