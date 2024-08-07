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
            const { rows } = await postgre.query(`INSERT INTO announcement(title, description, date_posted, time_posted, user_id) VALUES
                ('${title}', '${description}', CURRENT_DATE, CURRENT_TIME, '${id}')`)
            console.log(res)
            // res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = internnetController
