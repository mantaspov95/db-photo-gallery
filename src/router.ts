import { createBrowserRouter } from 'react-router';
import NotFoundPage from '@pages/NotFoundpage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
