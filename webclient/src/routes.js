import SignUp from './components/SignUp/index'
import Login from './views/User/Login'
import LandingPage from './components/LandingPage/Home/Home'
import UserPanel from  './views/UserPanel'
import ArticleDetail from './views/Store/ArticleDetail'
import About from './views/About'
import { Progress } from 'antd';

export const accountRoutes = [
    {
        path: '/',
        name: 'Home',
        icon: Progress,
        component: LandingPage,
        layout: '/home',
    },
    {
        path: '/about',
        name: 'Hakkında',
        icon: Progress,
        component: About,
        layout: '/home',
    },
    {
        path: '/signup',
        name: 'Sign Up',
        icon: Progress,
        component: SignUp,
        layout: '/home',
    },
    {
        path: '/login',
        name: 'Login',
        icon: Progress,
        component: Login,
        layout: '/home',
    },
    {
        path: '/articles/:id',
        name: 'Detail',
        icon: Progress,
        component: ArticleDetail,
        layout: '/home',
    },
 
]

export const userRoutes = [
    {
        path: '/',
        name: 'Home',
        icon: Progress,
        component: LandingPage,
        layout: '/home',
    },
    {
        path: '/userPanel',
        name: 'User Panel',
        icon: Progress,
        component: UserPanel,
        layout: '/home',
    },
    {
        path: '/articles/:id',
        name: 'Detail',
        icon: Progress,
        component: ArticleDetail,
        layout: '/home',
      },
      {
        path: '/about',
        name: 'Hakkında',
        icon: Progress,
        component: About,
        layout: '/home',
    },

]