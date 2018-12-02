import Home from './components/MainContent/Home/Home';
import Resume from './components/MainContent/Resume/Resume';
import Work from './components/MainContent/Work/Work'

const routes = [
  {
    path: '/',
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