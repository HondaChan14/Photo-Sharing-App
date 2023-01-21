const express= require('express');
const app = express();
const port = 8000;
app.listen(port, () => {

})
app.get('/', (req, res) => {
    res.json({
        "Hosting" : "Kinsta"
    })
})

console.log(`Listening on http://localhost:${port}`)