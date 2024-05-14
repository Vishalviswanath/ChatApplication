import axios from 'axios';
import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export const UserList = ({ user, avatar }) => {
  return (
    <li className='flex flex-col card rounded-outline h-16 bg-gray-950 overflow-hidden'>
      <div className='flex justify-start items-center'>
        <div className='avatar p-0'>
          <div className='w-12 rounded-full '>
            <img src={avatar} />
          </div>
        </div>
        <div className='flex flex-col items-center overflow-hidden'>
          <strong className='font-bold'>{user}</strong>
        </div>
      </div>
    </li>
  );
};

export const SideBar = () => {
  const [user, setUser] = useState();

  const profileHandler = () => {
    axios
      .get('http://localhost:3000/current')
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        navigate('/profileinfo');
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      axios.post('http://localhost:3000/logout');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <div className='h-screen card rounded-box'>
      <div className='p-4 flex justify-center items-center'>
        <label className='input input-bordered h-10 rounded-3xl flex items-center gap-2'>
          <input type='text' className='' placeholder='Search' />
        </label>
        <details className='dropdown dropdown-bottom dropdown-end'>
          <summary
            tabIndex={0}
            role='button'
            className='btn m-1 btn-circle btn-ghost'
          >
            <HiDotsVertical style={{ fontSize: '15px' }} />
          </summary>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32'
          >
            <li>
              <a onClick={profileHandler}>Profile Info</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </details>
      </div>
      <ul className='menu p-4 w-70 text-base-content gap-2'>
        <UserList
          user='User 2'
          avatar='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        />
        <UserList
          user='User 3'
          avatar='https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png'
        />
      </ul>
    </div>
  );
};
