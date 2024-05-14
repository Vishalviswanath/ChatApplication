import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);
  const [loginCridentials, setLoginCridentials] = useState({
    username: '',
    password: '',
  });
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/login', loginCridentials)
      .then((res) => {
        setUser(res.data);
        console.log('user loggedin sucessfully', res.data);
        setLoginSuccessful(true);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  useEffect(() => {
    if (loginSuccessful) {
      navigate('/home');
    }
  }, [loginSuccessful, navigate]);

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={loginHandler}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>User Name</span>
              </label>
              <input
                type='email'
                className='input input-bordered'
                value={loginCridentials.username}
                name='username'
                onChange={(e) =>
                  setLoginCridentials({
                    ...loginCridentials,
                    username: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                className='input input-bordered'
                value={loginCridentials.password}
                name='password'
                onChange={(e) =>
                  setLoginCridentials({
                    ...loginCridentials,
                    password: e.target.value,
                  })
                }
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <label className='label'>
              <span className='label-text-alt '>
                Not at Registerd ?{' '}
                <Link to='/signup'>
                  {' '}
                  <a className='link link-hover'>Signup</a>
                </Link>
              </span>
            </label>
            <div className='form-control mt-6'>
              <button className='btn btn-primary' type='submit'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <label className="swap swap-flip text-9xl"> */
}

{
  /* this hidden checkbox controls the state */
}
// <input type="checkbox" />

// <div className="swap-on">😈</div>
// <div className="swap-off">😇</div>
// </label>
