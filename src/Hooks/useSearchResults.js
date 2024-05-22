import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { skillsData } from '../skillsData';
import Fuse from 'fuse.js';
import { collection, getDocs, or, query, where } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

const useSearchResults = () => {
  const [users, setUsers] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const fuse = useMemo(() => {
    return new Fuse(skillsData, {
      keys: ['name', 'keywords'],
      minMatchCharLength: 2,
    });
  }, []);

  const skill = useMemo(() => {
    if (!searchQuery) return;
    const result = fuse.search(searchQuery);
    if (result) {
      return result[0]?.item.name;
    }
  }, [searchQuery, fuse]);

  useEffect(() => {
    if (!skill) return;

    setIsLoading(true);

    try {
      const getUsers = async () => {
        const usersRef = collection(db, 'users');
        const q = query(
          usersRef,
          or(
            where('offeredSkill', '==', skill),
            where('wantedSkill', '==', skill)
          )
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
  }, [skill]);
  return {
    loading,
    error,
    users,
  };
};

export default useSearchResults;
