import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSignupStore } from '../../../store/signup';

const avatarsUrls = [
  'https://firebasestorage.googleapis.com/v0/b/alemny-e43be.appspot.com/o/avatars%2Favatar-1.png?alt=media&token=058698a1-7898-4019-a9f7-61fb9f36dcac',
  'https://firebasestorage.googleapis.com/v0/b/alemny-e43be.appspot.com/o/avatars%2Favatar-2.png?alt=media&token=a2ef4f88-532a-412b-907f-45094f707df1',
  'https://firebasestorage.googleapis.com/v0/b/alemny-e43be.appspot.com/o/avatars%2Favatar-3.png?alt=media&token=6fb9d94a-ed99-43c8-951b-c008e95cfe7c',
  'https://firebasestorage.googleapis.com/v0/b/alemny-e43be.appspot.com/o/avatars%2Favatar-4.png?alt=media&token=b1f91089-a214-45e3-a3c8-015d9db7648f',
  'https://firebasestorage.googleapis.com/v0/b/alemny-e43be.appspot.com/o/avatars%2Favatar-5.png?alt=media&token=e6313475-ed53-4501-9d0f-223966a13191',
  'https://firebasestorage.googleapis.com/v0/b/alemny-e43be.appspot.com/o/avatars%2Favatar-6.png?alt=media&token=7c8f6d98-adf8-4e42-a4c2-3f97a67d6b2c',
];

const Avatars = () => {
  const { setFormData, formData } = useSignupStore();
  const [avatar, setAvatar] = useState(formData.avatar || null);
  useEffect(() => {
    setFormData({ avatar: avatar });
  }, [avatar, setFormData]);

  return (
    <div className='flex items-center justify-between gap-6 flex-wrap'>
      {avatarsUrls.map((url, i) => {
        return (
          <button
            type='button'
            onClick={() => setAvatar(url)}
            key={i}
            className='w-16 h-16 relative '
          >
            <img
              src={url}
              alt=''
              className='relative z-10 max-w-full rounded-full'
            />
            <div
              className='z-0 bg-slate-100 rounded-full 
            animate-pulse h-full w-full absolute inset-0'
            ></div>
            {avatar === url && (
              <motion.div
                layoutId='ring'
                className='top-0 h-full w-full border-4 border-blue-500 absolute z-20
                 rounded-full'
              ></motion.div>
            )}
          </button>
        );
      })}
    </div>
  );
};
export default Avatars;
