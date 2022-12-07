import {createRouter,createWebHashHistory} from 'vue-router'
import LoginComponent from '../components/LoginComponent';
import ClientComponent from '../components/ClientComponent';
import LivreComponent from '../components/LivreComponent';
import AuteurComponent from '../components/AuteurComponent';
import EmpruntComponent from '../components/EmpruntComponent';
import ComptComponent from '../components/ComptComponent';
const routes=[
    {
     path:'/compt',
     name:'compt',
     component:ComptComponent
    },
    {
        path:'/emprunt',
        name:'emprunt',
        component:EmpruntComponent
       },
    {
        path:'/auteur',
        name:'auter',
        component:AuteurComponent
       },
   
    {
     path:'/livre',
     name:'livre',
     component:LivreComponent
    },
    {
     path:'/',
     name:"login",
     component:LoginComponent
    },
    {
        path:'/client',
        name:'client',
        component:ClientComponent
    }
]
const router=createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
});
router.beforeEach((to,from)=>{
  from
  if(!localStorage.getItem("info") && to.name!=="login")
  return {name:'login'}
});
export default router;