import express from 'express'
import db from '../models/index'
import CRUDService from '../services/CRUDService'
let getHomePage = async(req,res) =>{
    try {
        let data = await db.User.findAll()
        // console.log("..................")
        // console.log(data)
        return res.render('homepage.ejs',{
            data : JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
}
let getAboutPage = (req,res) =>{
    return res.render('about.ejs')
}
let getCrudPage = (req,res) =>{
    return res.render('crud.ejs')
}
let postCRUD = async(req,res) => {
    let mess = await CRUDService.createNewUser(req.body);
    console.log(mess)
    // console.log(req.body)
    return res.send('post thanh cong')
}
let displayGetCRUD = async(req,res) =>{
    let data = await CRUDService.getAllUser()
    // console.log(data)
    return res.render('displaycrud.ejs',{
        dataTable : data
    })
}

let getEditCRUD = async(req,res) =>{
    let userId = req.query.id
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId)

        return res.render('editcrud.ejs',{
            userData : userData
        })
    }else{
        return res.send('Loi')
    }

}
let PutCRUD = async(req,res) =>{
    let data = req.body
    let allUser = await CRUDService.updateUserDate(data)
    return res.render('displaycrud.ejs',{
        dataTable : allUser
    })

}
let deleteCRUD = async(req,res) => {
    let id = req.query.id
    if(id) {
        await CRUDService.deleteUserById(id)
        return res.send(" delete succeed")
    }else{
        return res.send('not found')
    }

}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage:getAboutPage,
    getCrudPage : getCrudPage,
    postCRUD : postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    PutCRUD : PutCRUD,
    deleteCRUD: deleteCRUD,
}