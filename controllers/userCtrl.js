const Users = require('../models/userModel');

const userCtrl = {
    register: (req, res) => {
        res.json({msg: "Test Controllers"})
    }
}

module.exports = userCtrl;