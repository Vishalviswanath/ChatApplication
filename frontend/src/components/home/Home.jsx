import Main from '../main/Convervation';
import {SideBar} from '../sidebar/SideBar';

const Home = () => {
  return (
    <div className='flex '>
      <div className=' h-screen w-80 card bg-base-300 rounded-none'>
        <SideBar />
      </div>
      <div className='divider divider-neutral' />
      <div className=' h-screen flex flex-col  w-screen p-4'>
        <Main />
      </div>
    </div>
  );
};

export default Home;
