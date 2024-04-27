const jwt = require('jsonwebtoken');

const jwtSecretKey = "VeRy StRoNg KeY 934570";


const verifyAuth = async (req, res, next) => {
    console.log("verifing user...")
    try {
        console.log(req.body)
        const { JWT } = req.body;
        //const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE0MDQyOTQwLCJleHAiOjE3MTQwNDY1NDB9.2Ohp1Kr-rdoUSyplHq-uzxk1N_u34JyoSkaFsdlQabM"
        if(JWT) {
            const content = jwt.decode(JWT, jwtSecretKey);
            console.log("verified success. username: ", content['username']);
            next()
            res.send({
                username: content['username'],
                auth: true
            })
        }
        else {
            console.log("Not Verified");

            return res.send({
                auth: false,
                msg: "Token Not Found"
            })
        }

    }
    catch (err) {
        console.log("Error while verification.");
        console.log(err)
        res.send({
            auth: false,
            error: 1,
            msg: "some thing went wrong",
        })
    }
}

module.exports = verifyAuth;