const {getCurrentDate} = require('../database/functions/test');

const respuesta = (req, res) =>{
    getCurrentDate().then((resp)=>{
        console.log(resp)
        res.send(resp)
    })
}

module.exports = {
    respuesta
}