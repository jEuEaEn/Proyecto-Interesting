import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req,res) =>{

    res.send({message: 'Servidor corriendo correctamente'})

})

app.get("/DontKnow", (req,res) =>{

    res.send.status(200).json({
        message: 'La verdad es que no hay una verdad'
    })

})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{

    console.log('Repositorio iniciado XD, en el puerto: ' + PORT)

})