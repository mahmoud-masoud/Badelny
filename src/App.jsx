import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Routes/Root';
import Home from './Pages/Home';
import Search from './Pages/Search';
import UserAuthContextProvider from './Context/UserAuthContext';
import ExplorePage from './Pages/ExplorePage';
import ProfilePage from './Pages/ProfilePage';
import Chat from './Pages/Chat';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import NotFoundPage from './Pages/NotFoundPage';
import Toast from './Components/UI/Toast';

const App = () => {
  const router = createBrowserRouter([
    { path: '*', element: <NotFoundPage /> },
    {
      path: '/',
      element: <Root />,

      children: [
        { index: true, element: <Home /> },
        { path: '/profile', element: <ProfilePage /> },

        {
          path: '/search',
          element: <Search />,
        },
        {
          path: '/explore',
          element: <ExplorePage />,
        },
        {
          path: '/chat',
          element: <Chat />,
        },
      ],
    },
    { path: '/login', element: <LoginPage /> },
    {
      path: '/signup',
      element: <SignupPage />,
    },
  ]);

  return (
    <UserAuthContextProvider>
      <RouterProvider router={router} />
      <Toast />
    </UserAuthContextProvider>
  );
};
export default App;
