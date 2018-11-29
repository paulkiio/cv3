import Bio from './MainContent/Bio/Bio';
import Resume from './MainContent/Resume/Resume';
import Work from './MainContent/Work/Work';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/bio',
    component: Bio
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