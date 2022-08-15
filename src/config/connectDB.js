const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('demo','root',null,{
    host :'localhost',
    dialect:'mysql',
    logging:false,
})


let connectDB = async() =>{
    try {
        await sequelize.authenticate();
        console.log('connection')
    } catch (error) {
        console.error("khong ket noi dc DB" , error)
        
    }
}

module.exports = connectDB