import { createContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../utils/firebaseConfig';
import { doc, getDoc } from '@firebase/firestore';

export const UserAuthContext = createContext({
  user: null,
  userIsLoading: true,
  userDataIsLoading: true,
  userData: null,
  setUserData: () => {},
});

const UserAuthContextProvider = ({ children }) => {
  const [user, isLoading] = useAuthState(auth);
  const [userDataIsLoading, setUserDataIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      try {
        const userRefDoc = doc(db, 'users', user.uid);

        const userDoc = await getDoc(userRefDoc);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserData(userData);
          setUserDataIsLoading(false);
        } else {
          setUserDataIsLoading(false);
        }
      } catch (error) {
        setUserDataIsLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <UserAuthContext.Provider
      value={{
        user,
        userIsLoading: isLoading,
        userData,
        setUserData,
        userDataIsLoading,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
