import Resume from './MainContent/Resume/Resume';
import Work from './MainContent/Work/Work'

const routes = [
  {
    path: '/'
  },
  {
    path: './MainContent/Resume/Resume',
    component: Resume
  },
  {
    path: './MainContent/Work/Work',
    component: Work
  }
]

export default routes;