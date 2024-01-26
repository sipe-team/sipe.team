import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Navigation';
import About from './pages/About';
import Activity from './pages/Activity';
import Contact from './pages/Contact';
import Home from './pages/Home';
import People from './pages/People';
import Recruit from './pages/Recruit';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <Outlet />
      <Footer fixed={pathname === '/' || pathname === '/contact'} />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/recruit', element: <Recruit /> },
      { path: '/people', element: <People /> },
      { path: '/activity', element: <Activity /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
