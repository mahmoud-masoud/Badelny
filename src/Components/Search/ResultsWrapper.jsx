import Wrapper from '../UI/Wrapper';
import ResultItem from './ResultItem';
import LoadingPage from '../../Pages/LoadingPage';
import NotConnectPage from '../../Pages/NotConnectPage';
import NoResults from '../UI/NoResults';
import useSearchResults from '../../Hooks/useSearchResults';

const ResultsWrapper = () => {
  const { loading, error, users } = useSearchResults();

  if (loading) return <LoadingPage />;
  if (error) return <NotConnectPage />;
  if (!users) return <NoResults />;

  return (
    <Wrapper>
      <div className='py-20 flex gap-10 flex-col'>
        {users.map((user) => {
          return <ResultItem key={user.id} foundUser={user} />;
        })}
      </div>
    </Wrapper>
  );
};
export default ResultsWrapper;
