module.exports = app => {

  const { router, controller } = app
  var adminauth = app.middleware.adminauth()
  const { router, controller } = app
  router.get('/admin/index', adminauth, controller.admin.main.index)
  router.post('/admin/checkLogin', controller.admin.main.checkLogin)
}