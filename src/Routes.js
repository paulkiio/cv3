import Home from "./components/MainContent/Home/Home"
import Resume from "./components/MainContent/Resume/Resume"
import Project from "./components/MainContent/Project/Project"
import Contact from "./components/MainContent/Contact/Contact"
import Blog from "./components/MainContent/Blog/Blog"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/resume",
    component: Resume,
  },
  {
    path: "/projects",
    component: Project,
  },
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/contact",
    component: Contact
  }
]

export default routes
