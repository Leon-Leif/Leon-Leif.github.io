const app = require('express')();
const Port = 8080;

app.listen(
    Port,
    () => console.log(`it is running at http://localhost:${Port}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'T',
        size: 'large'
    })
})
