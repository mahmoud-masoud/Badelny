import { useEffect, useState } from 'react';
import useUserContext from './useUserContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

const useExplore = () => {
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const { user, userData } = useUserContext();

  useEffect(() => {
    if (!user || !userData) {
      return;
    }

    try {
      setIsLoading(true);
      const { offeredSkill, wantedSkill } = userData;

      const getUsers = async () => {
        const usersRef = collection(db, 'users');
        const q = query(
          usersRef,
          where('offeredSkill', '==', wantedSkill),
          where('wantedSkill', '==', offeredSkill)
        );

        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setUsers(data);
        }
        setIsLoading(false);
      };

      getUsers();
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, [user, userData]);

  return {
    loading,
    error,
    users,
  };
};
export default useExplore;
