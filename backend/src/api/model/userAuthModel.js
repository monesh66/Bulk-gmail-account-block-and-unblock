const mongoose = require('mongoose');


const adminUserSchema = new mongoose.Schema({

    id:{type: Number},
    username:{type: String},
    password:{type: String}
})

const adminUserModel = mongoose.model("adminUser", adminUserSchema);




//exports
module.exports = adminUserModel;