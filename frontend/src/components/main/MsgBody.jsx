/* eslint-disable react/prop-types */
export const MsgBodySender = ({ avatar, msg }) => {
  return (
    <div className='p-4 chat chat-start'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={avatar} />
        </div>
      </div>
      <div className='chat-bubble'>{msg}</div>
      <div className='chat-footer opacity-50'>Delivered</div>
    </div>
  );
};

export const MsgBodyReciver = ({ avatar, msg }) => {
  return (
    <div className='p-4 chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={avatar} />
        </div>
      </div>
      <div className='chat-bubble'>{msg}</div>
      <div className='chat-footer opacity-50'>Seen at 12:46</div>
    </div>
  );
};

