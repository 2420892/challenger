// books
const db = require("../config")
class BookAuthor{
    fetchBookAuthor(req, res) {
        const query = `
        SELECT a.id, a.authourName, a.authorSurname, b.bookID
        FROM BookAuthor AS a
        JOIN Books AS b ON b.bookID = a.bookID;
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
}
module.exports =BookAuthor