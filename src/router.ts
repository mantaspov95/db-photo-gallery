import { createBrowserRouter } from 'react-router';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '*',
        // placeholder for non existing route callback.
        Component: undefined,
      },
    ],
  },
]);

export default router;
