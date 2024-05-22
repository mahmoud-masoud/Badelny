import useUserContext from '../../Hooks/useUserContext';
import ResultItem from '../Search/ResultItem';
import Wrapper from '../UI/Wrapper';
import LoadingPage from '../../Pages/LoadingPage';
import NotLoggedInPage from '../../Pages/NotLoggedInPage';
import NotConnectPage from '../../Pages/NotConnectPage';
import DirectionIcon from '../../assets/icons/DirectionIcon';
import useExplore from '../../Hooks/useExplore';

const ExploreWrapper = () => {
  const { loading, error, users } = useExplore();
  const { user, userIsLoading } = useUserContext();

  if (!user && !userIsLoading) return <NotLoggedInPage />;
  if (loading || userIsLoading) return <LoadingPage />;
  if (error) return <NotConnectPage />;
  if (!users) return <NoMatches />;

  return (
    <Wrapper>
      <div className='py-20 flex gap-10 flex-col'>
        {users?.map((user) => {
          return <ResultItem key={user.id} foundUser={user} />;
        })}
      </div>
    </Wrapper>
  );
};
export default ExploreWrapper;

const NoMatches = () => {
  return (
    <section className='flex flex-col justify-center items-center p-4 text-center'>
      <div className='w-60 md:w-80 my-10 bg-main-50 p-10 rounded-full'>
        <DirectionIcon />
      </div>

      <p className='text-slate-700 font-medium text-lg'>
        Sorry, no match found. You can search for other one!
      </p>
    </section>
  );
};
