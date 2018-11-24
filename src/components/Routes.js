import Home from './MainContent/Home/Home';
import Resume from './MainContent/Resume/Resume';
import Work from './MainContent/Work/Work';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/work',
    component: Work
  }
]

export default routes;