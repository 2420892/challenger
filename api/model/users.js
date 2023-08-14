// user will have all the metods we will have on our database
const db = require("../config")
// hash function allows password encryption. Compare allows us to check the password against the encrypt password.
const{hash,compare,hashSync}=require('bcrypt')
const {createToken} = require('../middleware/authenticateuser')

class Users{
    fetchUsers(req,res){
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users;
        `
        db.query(query, (err,results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
        })

    }
    fetchUser(req,res){
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID =${req.params.id};
        `
        db.query(queury,(err,result)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                result
            })
        })
    }
    login(req,res){

    }
    async register(req,res){
        const data = req.body
        // encrypt password
        data.userPass = await hash(data.userPass,15)
        // payload (userdata)
        const user = {
            emailAdd : data.emailAdd,
            userPass : data.userPass
        }
        // query
        const query =`
        INSERT INTO Users
        SET ?;
        `
        db.query(query,[data], (err)=>{
        if(err) throw err
        // create token
        let token = createToken(user)
        res.cookie("LegitUseer",token,{
            maxAge : 3600000,
            httpOnly : true
        })
        res.json({
            status : res.statusCode,
            msg: "you are now registered."
        })
    })
    }
    updateUser(req,res){
        const query =`
        UPDATE Users
        SET ?
        WHERE userID=?
        `
        db.query(query, [req.body, req.params.id],(err)=>{
           if (err) throw err
           res.json({
            status: statusCode,
            msg: "The user record was updated."

           })
     
        })
    }
    deleteUser(req,res){
        const query = `
        DELETE FROM Users
        WHERE userID =${req.params.id}
        `
        db.query(query,(err)=>{//we are not expecting a data here , only a message hence callback is only err
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg: "A user record was deleted."
            })
        })
    }
}
module.exports = Users