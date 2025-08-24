import { createBrowserRouter } from 'react-router';
import NotFoundPage from '@pages/NotFoundpage';
import HomePage from '@pages/HomePage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
