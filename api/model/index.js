const Users = require('./users')
const Orders =require('./Orders')
const Books = require('./Books')
const  BookAuthors = require('./BookAuthors')
// EXPORT AL OBJJECTS
    module.exports = {
        Users: new Users(),
        // Orders: new Orders(),
        // Books : new Books(),
        // BookAuthors :new BookAuthors()
    }