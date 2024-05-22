import { UserAuthContext } from '../Context/UserAuthContext';
import { useContext } from 'react';

const useUserContext = () => {
  const { user, userIsLoading, userData, userDataIsLoading, setUserData } =
    useContext(UserAuthContext);

  return { user, userIsLoading, userData, userDataIsLoading, setUserData };
};

export default useUserContext;
