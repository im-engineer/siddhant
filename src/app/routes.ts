import { createBrowserRouter } from 'react-router';
import Portfolio from '@/app/pages/Portfolio';
import ProjectDetail from '@/app/pages/ProjectDetail';
import AllProjects from '@/app/pages/AllProjects';
import NotFound from '@/app/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Portfolio,
  },
  {
    path: '/projects',
    Component: AllProjects,
  },
  {
    path: '/project/:slug',
    Component: ProjectDetail,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);
