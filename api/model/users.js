// user will have all the metods we will have on our database
const db = require("../config")
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
    register(req,res){

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
module.exports = {Users}