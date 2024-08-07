const postgre = require('../database')
const internnetController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM users")
            console.log(res)
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getOne: async(req, res) => {
        try {
            const { rows } = await postgre.query(`SELECT * FROM users WHERE username = '${req.params.username}'`)
            console.log(res)
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = internnetController