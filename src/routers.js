export default function (router) {
  router.map({
    '/': {
      name: 'index',
      component: function (resolve) {
        require(['./App.vue'], resolve)
      },
      subRoutes: {
        '/home': {
          name: 'home',
          component: function (resolve) {
            require(['./pages/Home.vue'], resolve)
          }
        },
        // 关于
        '/about': {
          name: 'about',
          component: function (resolve) {
            require(['./pages/About.vue'], resolve)
          }
        }
      }
    }
    // ,
    // // 404
    // '*': {
    //   component: function (resolve) {
    //     require(['./pages/Index.vue'], resolve)
    //   }
    // }
  })

  // redirect
  router.redirect({
    // 重定向任意未匹配路径到 /
    '*': '/home'
  })
}
