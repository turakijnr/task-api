const express = require('express')
require('./src/db/mongoose')
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')
const app = express()
const port = process.env.PORT 

// app.use((req,res, next) =>{
//     res.status(503).send('Site is currently down. check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('server is up on port' + port)
})

