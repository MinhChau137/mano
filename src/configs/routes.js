import { Navigate } from 'react-router-dom';
import MainLayout from '../layouts/Main/MainLayout';
import NotFoundPage from '../pages/Error/NotFound';
import HomePage from '../pages/Home/Home';

const routes = [
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
