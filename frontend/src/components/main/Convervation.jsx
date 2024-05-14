import { GrSend } from 'react-icons/gr';
import { MsgBodyReciver, MsgBodySender } from './MsgBody';
import UserHeader from './UserHeader';

const Convervation = () => {
  return (
    <>
      <div className='flex flex-grow card bg-base-300 rounded-box overflow-hidden justify-between'>
        <UserHeader
          user='User2'
          avatar='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        />
        <div className='max-h-screen overflow-y-scroll scroll-smooth'>
          <MsgBodySender
            user='User2'
            avatar='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
            msg='hi i am user2'
          />
          <MsgBodyReciver
            user='User1'
            avatar='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            msg='hello, User'
          />
        </div>
      </div>
      <div className='p-4 h-20 flex flex-row card rounded-sm'>
        <label className='input input-bordered rounded-3xl flex items-center gap-2'>
          <input type='text' className='' placeholder='Search' />
        </label>
        <button className='btn btn-circle btn-ghost'>
          <GrSend style={{ fontSize: '20px' }} />
        </button>
      </div>
    </>
  );
};

export default Convervation;
