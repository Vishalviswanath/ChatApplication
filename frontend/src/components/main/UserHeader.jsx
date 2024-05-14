/* eslint-disable react/prop-types */
import { RiSearch2Line } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';

const UserHeader = ({ avatar, user }) => {
  return (
    <div className='flex top-0 navbar bg-zinc-950 rounded-none align-middle justify-between '>
      <div className='avatar justify-between pl-4 gap-2'>
        <div className='w-10 rounded-full'>
          <img src={avatar} />
        </div>
        <label>{user}</label>
      </div>
      <div className='align-baseline'>
        <button className='btn btn-circle btn-ghost '>
          <RiSearch2Line style={{ fontSize: '15px' }} />
        </button>
        <div className='dropdown dropdown-hover dropdown-bottom dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn m-1 btn-circle btn-ghost'
          >
            <HiDotsVertical style={{ fontSize: '15px' }} />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36'
          >
            <li>
              <a>Delete Chat</a>
            </li>
            <li>
              <a>Contact Info</a>
            </li>
            <li>
              <a>Block</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
