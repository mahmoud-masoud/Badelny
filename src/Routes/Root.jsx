import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../Components/HomePage/Header/Header';
const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <ScrollRestoration />
    </>
  );
};
export default Root;
