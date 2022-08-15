import bcrypt from 'bcrypt';
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise (async(resolve,reject) =>{
        try {
            let hasPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password:hasPasswordFromBcrypt,
                firstName: data.FirstName,
                lastName: data.LastName,
                address:data.Address,
                phonenumber : data.PhoneNumber,
                gender:data.gender === '1' ? true : false,
                roleId : data.roleId,

            })
            resolve('ok create new')
        } catch (error) {
            reject(error)
        }
    })
    
}

let hashUserPassword = (password) => {
    return new Promise(async(resolve,reject)=>{
        try {
            var hashPassword = await bcrypt.hashSync(password,salt)
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}
let getUserInfoById = (userId) => {
    return new Promise(async (resolve,reject) => {
        try {
            let user = db.User.findOne({
                where: {id : userId}

            })
            if(user){
                resolve(user)
            }else{
                resolve([])
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUser = () => {
    return new Promise(async(resolve,reject) => {
        try {
            let users = db.User.findAll({
                row : true
            })
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}


let updateUserDate = (data) =>{
    return new Promise (async(resolve,reject) =>{
        try {
            let user = await db.User.findOne({
                where : {id: data.id}
            })
            if(user){
                user.email = data.email
                user.firstName = data.FirstName
                user.lastName = data.LastName
                user.address = data.Address

                await user.save()
                let allUser = await db.User.findAll()
                resolve(allUser)
            }else{
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}
let deleteUserById = (id) => {
    return new Promise (async(resolve,reject) => {
        try {
            let user = await db.User.findOne({
                where: {id : id}
            })
            if(user) {
                await user.destroy()
            }
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewUser:createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserDate : updateUserDate,
    deleteUserById: deleteUserById,

}