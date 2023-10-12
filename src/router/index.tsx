import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
export default router;
