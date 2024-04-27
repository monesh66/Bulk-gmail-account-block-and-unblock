const adminUserModel = require('../model/userAuthModel');
const jwt = require('jsonwebtoken');

const jwtSecretKey = "VeRy StRoNg KeY 934570";
const maxAge = 60*60

function createToken(username) {
    return jwt.sign({ username }, jwtSecretKey, { expiresIn: maxAge })
}

const userLogin = async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;
        const DBresult = await adminUserModel.findOne({ username: username });

        if (DBresult == null) {
            return res.send({
                msg: "username or password is wrong",
                code: 0
            })
        }
        else if (DBresult['password'] == password) {    

            const token = createToken(username);
            res.cookie("JWT", token, {
                withCrdentials: true,
                maxAge: maxAge * 1000
            })
            return res.send({
                msg: "login successfull",
                code: 1
            })
        }
        else {
            return res.send({
                msg: "username or password is wrong",
                code: 0
            })
        };

    } catch (error) {
        return res.send({
            msg: "Some Thing Went Wrong...",
            error: error,
            code: -1
        })
    }

}


//exports
module.exports = userLogin;