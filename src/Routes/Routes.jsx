import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom';
import NotFoundPage from '../Pages/NotFoundPage';
import Home from '../Pages/Home';
import ProfilePage from '../Pages/ProfilePage';
import Search from '../Pages/Search';
import ExplorePage from '../Pages/ExplorePage';
import Chat from '../Pages/Chat';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import Root from './Root';
import { useEffect } from 'react';

const Routes = () => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [location.pathname]);

  const router = createBrowserRouter([
    { path: '*', element: <NotFoundPage /> },
    {
      path: '/',
      element: <Root />,

      children: [
        { path: '/', element: <Home /> },
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

  return <RouterProvider router={router} />;
};
export default Routes;
