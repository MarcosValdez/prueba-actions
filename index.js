import express from 'express'
import { router as userRouter } from './user.router.js'
/* create an express app and use JSON */
const app = new express()
app.use(express.json())

app.get('/prueba', (req, res) => {
  res.status(200).json({
    gawr: 'Hola mi HOME'
  })  
}) 

app.use('/user', userRouter)

const puerto = 8080
/* start the server */
app.listen(puerto, () => {
  console.log(`La api esta en http://localhost:${puerto}`)
})

export default app

