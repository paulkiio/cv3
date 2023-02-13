import Home from './components/MainContent/Home/Home';
import Resume from './components/MainContent/Resume/Resume';
import Project from './components/MainContent/Project/Project'

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
    path: '/projects',
    component: Project
  }
]

export default routes;