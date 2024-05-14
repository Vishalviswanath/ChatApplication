import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const [user, setUser] = useState();
  const [createUser, setCreateUser] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmpassword: '',
  });

  const createUserHandler = (e) => {
    e.preventDefault();
    const newUser = {
      fullname: createUser.fullname,
      username: createUser.username,
      password: createUser.password,
      confirmpassword: createUser.confirmpassword,
    };
    setUser(newUser);
    setCreateUser({
      fullname: '',
      username: '',
      password: '',
      confirmpassword: '',
    });
    console.log('record created sussfully');
    console.log(newUser);
    console.log({ ...user, newUser });
  };

  useEffect(() => {
    if (user) {
      axios
        .post('http://localhost:3000/signup', user)
        .then((res) => {
          console.log('User created Sussufully'), res.data;
        })
        .catch((error) => console.error('Error signing up user:', error));
    }
  }, [user]);

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='text-center lg:text-right'>
          <h1 className='text-5xl font-bold'>Signup!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={createUserHandler}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Full Name</span>
              </label>
              <input
                type='text'
                className='input input-bordered'
                value={createUser.fullname}
                name='fullname'
                onChange={(e) =>
                  setCreateUser({ ...createUser, fullname: e.target.value })
                }
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>User Name</span>
              </label>
              <input
                type='text'
                className='input input-bordered'
                name='username'
                value={createUser.username}
                onChange={(e) =>
                  setCreateUser({ ...createUser, username: e.target.value })
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
                name='password'
                value={createUser.password}
                onChange={(e) =>
                  setCreateUser({ ...createUser, password: e.target.value })
                }
                required
              />
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                name='confirmpassword'
                value={createUser.confirmpassword}
                onChange={(e) =>
                  setCreateUser({
                    ...createUser,
                    confirmpassword: e.target.value,
                  })
                }
                className='input input-bordered'
                required
              />
              <label className='label'>
                <span className='label-text-alt'>
                  Already has account?{' '}
                  <Link to='/login'>
                    {' '}
                    <a className='link link-hover'>Login</a>
                  </Link>
                </span>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary' type='submit'>
                Sigup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
