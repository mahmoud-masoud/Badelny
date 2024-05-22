import ChatWrapper from '../Components/Chat/ChatWrapper';
import Wrapper from '../Components/UI/Wrapper';
import useUserContext from '../Hooks/useUserContext';
import NotLoggedInPage from './NotLoggedInPage';

const Chat = () => {
  const { user, userIsLoading } = useUserContext();

  if (!user && !userIsLoading) return <NotLoggedInPage />;

  return (
    <Wrapper>
      <ChatWrapper />
    </Wrapper>
  );
};
export default Chat;
