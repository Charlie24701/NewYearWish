const express=require('express')
const app = express()
const path = require('path')
app.listen(1837,()=>{
    console.log("Server is running on PORT 1837")
})
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.redirect('/public/index.html');
});