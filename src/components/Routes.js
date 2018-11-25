import About from './MainContent/About/About';
import Resume from './MainContent/Resume/Resume';
import Work from './MainContent/Work/Work'

const routes = [
  {
    path: '/'
  },
  {
    path: '/about',
    component: About
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