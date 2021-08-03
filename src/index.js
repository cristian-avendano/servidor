
const express = require('express')
const app = express()
const port = 3000

const api = require('./rest/api');

app.use('/', api);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(port, () => {
  console.log(`Despliegue en el puerto http://localhost:${port}`);
})

