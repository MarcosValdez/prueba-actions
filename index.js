import express from 'express'

/* create an express app and use JSON */
const app = new express()
app.use(express.json())

app.get('/prueba', (req, res) => {
    res.status(200).json({
        gawr: 'Hola mi HOME'
    })
})

console.log("prueba test")


const puerto = process.env.PORT | 8080
/* start the server */
app.listen(puerto, () => {
    console.log(`La api esta en http://localhost:${puerto}`);
})

export default app;

