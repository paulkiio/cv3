import Bio from './components/MainContent/Bio/Bio';
import Resume from './components/MainContent/Resume/Resume';
import Work from './components/MainContent/Work/Work'

const routes = [
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