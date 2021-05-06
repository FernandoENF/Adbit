const {verify} = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const acessToken = req.header('adbitAcessToken')

    if(!acessToken) return res.json({ erro: "usuario nao logado"})

    try {
        const validToken = verify(acessToken, process.env.SECRET);
        req.user = validToken
        if(validToken) {
            return next();
        }
    }   catch(err) {
        return res.json({error: err})
    }
}

module.exports = {validateToken}