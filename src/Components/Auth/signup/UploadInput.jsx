import { CloudArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useSignupStore } from '../../../store/signup';

const UploadInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { setFormData } = useSignupStore();
  useEffect(() => {
    setFormData({ photo: selectedImage });
  }, [selectedImage, setFormData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    } else {
      e.target.value = '';
    }
  };

  const clearInput = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {!selectedImage && (
        <label
          htmlFor='uploadFile'
          className='bg-white text-black text-base rounded-full
       w-32 h-32 flex flex-col items-center
        justify-center cursor-pointer border-2
         border-gray-300 border-dashed'
        >
          <CloudArrowUpIcon className='text-secondary h-10' />
          تحميل صورة
          <input
            type='file'
            id='uploadFile'
            name='photo'
            className='hidden'
            accept='image/*'
            onChange={handleImageChange}
          />
        </label>
      )}

      {selectedImage && (
        <div className='relative -red-400'>
          <button
            onClick={clearInput}
            className='absolute -top-3 -right-3 text-dark rounded-full
             hover:bg-blue-100 p-1 border border-blue-200'
          >
            <XMarkIcon className='h-5 stroke-2 ' />
          </button>
          <div
            className='h-32 w-32 flex justify-center 
          items-center rounded-full border-2
         border-gray-300 border-dashed p-1 overflow-hidden'
          >
            <img
              className='block rounded-full max-w-full'
              src={URL.createObjectURL(selectedImage)}
              alt='Selected'
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default UploadInput;
