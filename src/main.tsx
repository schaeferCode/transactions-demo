import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './index.css'
import { defaultLoader } from '@/loaders'
import DefaultLayout from '@/layouts/DefaultLayout';
import User from '@/pages/User'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<DefaultLayout />} loader={defaultLoader}>
    <Route path="/user/:user" element={<User />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
