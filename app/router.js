'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app
	router.get('/', controller.home.index)
	router.post('/admin/register', controller.register.index)
	router.post('/admin/login', controller.login.index)
	router.get('/admin/captcha', controller.captcha.index)
	router.post('/admin/upload/img', controller.upload.uploadImg)
	router.get('/admin/province', controller.region.province)
	router.get('/admin/city/:id', controller.region.city)
	router.get('/admin/area/:id', controller.region.area)
	router.get('/admin/route', controller.menu.route)

	router.get('/admin/article/all', controller.article.all)
	router.post('/admin/article/audit/:id', controller.article.audit)
	router.post('/admin/article/publish/:id', controller.article.publish)

	router.resources('userInfo', '/admin/userInfo', controller.userInfo)
	router.resources('user', '/admin/user', controller.user)
	router.resources('menu', '/admin/menu', controller.menu)
	router.resources('category', '/admin/category', controller.category)
	router.resources('article', '/admin/article', controller.article)
}
