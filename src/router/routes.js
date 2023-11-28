import Permission from '@/middlewares/permission'
import Auth from '@/middlewares/auth'
import testMiddleware from "@/middlewares/permission"


const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Account.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/Account.vue'),
      meta: {
        title: "Applications for Approval",
        isActive: true,
        middleware: [Auth],
        permissions: ["docs-download"],
      },
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/docs.vue'),
      meta: {
        title: "Applications for Approval",
        isActive: true,
        middleware: [Permission],
        permissions: ["docs-download"],
      },
    },
    
  ]

export default routes