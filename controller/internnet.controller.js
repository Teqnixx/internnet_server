const postgre = require('../database')
const internnetController = {
    // get all users
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM users")
            console.log(res)
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    
    // get one by username
    getOne: async(req, res) => {
        try {
            const { rows } = await postgre.query(`SELECT * FROM users WHERE username = '${req.params.username}'`)
            console.log(res)
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },

    // post announcement
    postAnnouncement: async(req, res) => {
        const { title, description, id } = req.body

        try {
            const sql = 'INSERT INTO announcements(title, description, date_posted, time_posted, user_id) VALUES($1, $2, CURRENT_DATE, CURRENT_TIME, $3) RETURNING *'

            const { rows } = await postgre.query(sql, [ title, description, id ])
            
            console.log(res)
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = internnetController
