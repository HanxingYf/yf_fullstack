module.exports = app => {

  var adminauth = app.middleware.adminauth()

  const { router, controller } = app
  router.get('/admin/index', controller.admin.main.index)
  router.post('/admin/checkLogin', controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo',adminauth ,controller.admin.main.getTypeInfo)
}