import express from "express";
import homeController from '../controllers/homeController'
let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/',homeController.getHomePage)
    router.get('/about',homeController.getAboutPage)
    router.get('/crud',homeController.getCrudPage)

    router.post('/post-crud',homeController.postCRUD)
    router.get('/get-crud',homeController.displayGetCRUD)
    router.get('/edit-crud',homeController.getEditCRUD)
    router.post('/put-crud',homeController.PutCRUD)
    router.get('/delete-crud',homeController.deleteCRUD)
    
    return app.use("/",router)
}

module.exports = initWebRoutes