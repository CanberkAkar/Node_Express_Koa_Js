const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.status(200).send('INDEX')
})
app.get('/about', (req, res)=> {
    res.status(200).send('ABOUT')
})
app.get('/contact', (req, res)=> {
    res.status(200).send('CONTACT')
})
app.get('/details', (req, res)=> {
    res.status(200).send('DETAILS')
})
app.get('*', (req, res)=> {
    res.status(404).send('NOT FOUND')
})

const port=8085;
app.listen(port,()=>{
    console.log(`${port} Port Activated`);
})