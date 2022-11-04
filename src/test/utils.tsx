import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  NonIndexRouteObject,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

interface IRouterConfig {
  path?: string
  route?: string
  loader?: NonIndexRouteObject['loader']
}

export function renderWithRouter(
  ui: ReactNode,
  { path = '/', route = '/', loader }: IRouterConfig = {}
) {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path={path} element={ui} loader={loader} />
    ),
    {
      initialEntries: [route],
    }
  )
  return {
    ...render(<RouterProvider router={router} />),
  }
}

interface RenderWithContextProps<T = any> {
  context: T;
  children: ReactNode;
}

export const renderWithContext = <T,>({
  context,
  children,
}: RenderWithContextProps<T>) => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet context={context as T} />}>
        <Route index element={children} />
      </Route>
    ),
    {
      initialEntries: ['/'],
    }
  )
  return {
    ...render(<RouterProvider router={router} />),
  }
};
