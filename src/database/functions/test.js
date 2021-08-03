const {db} = require('../conection');

const getCurrentDate = async () =>{
    return await 
        db.query('SELECT NOW() as now')
            .then((data)=>{return data.rows[0]})
            .catch(e => console.error(e.stack))
}

module.exports = {
    getCurrentDate
}