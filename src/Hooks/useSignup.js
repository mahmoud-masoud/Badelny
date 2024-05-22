import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../utils/firebaseConfig';
import { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useSignupStore } from '../store/signup';
import { useToastStore } from '../store/toast';
const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { formData, currentStep, setCurrentStep } = useSignupStore();
  const { addToast } = useToastStore();

  const createUserAccount = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.avatar,
      });

      await addUserDataToDB({
        formData,
        user,
      });

      setIsLoading(false);
      setIsSuccess(true);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      addToast(error.code);
      setError(error.code);
      setIsLoading(false);
    }
  };

  return { createUserAccount, isSuccess, isLoading, error };
};

// await updateProfile(user, { displayName: name });

// const photoUrl = await uploadUserPhotoToStorage(user.uid, photo);

export default useSignup;

const uploadUserPhotoToStorage = async (file, userId) => {
  let uuid = uuid();

  const storageRef = ref(storage, `images/usersPhotos/${userId}/${uuid}`);
  const uploadedTask = await uploadBytes(storageRef, file);

  return await getDownloadURL(uploadedTask.ref);
};

const addUserDataToDB = async (data) => {
  const { user, formData } = data;
  const { offeredSkill, wantedSkill, phone, age, gender, country, avatar } =
    formData;
  const userData = {
    name: user?.displayName,
    email: user?.email,
    id: user?.uid,
    timestamp: serverTimestamp(),
    offeredSkill,
    wantedSkill,
    age,
    gender,
    country,
    avatar,
    phone,
  };

  try {
    const userRef = doc(db, 'users', user.uid);

    return await setDoc(userRef, userData);
  } catch (error) {
    console.error('Error adding user: ', error);
  }
};
