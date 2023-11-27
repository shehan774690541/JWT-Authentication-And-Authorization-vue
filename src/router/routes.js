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
        type: "menu-item",
        title: "Applications for Approval",
        isActive: true,
        middleware: [Permission],
        permissions: ["docs-download"],
      },
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/docs.vue'),
      meta: {
        type: "menu-item",
        title: "Applications for Approval",
        isActive: false,
        middleware: [Permission],
        permissions: ["docs-download"],
      },
    },
  ]

export default routes