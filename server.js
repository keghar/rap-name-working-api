const { application } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage':{
    'birthName': 'Sheyaa',
    'birthLocation': 'London, England',
    'age': 29},

    'Chance the Rapper':{
        'birthName': 'Sheyaa',
        'birthLocation': 'London, England',
        'age': 29},

    'unknown':{
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 29},
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ) {
        response.json(rappers[rapperName])
    }else {
        response.json(rappers['unknown'])
    }
    response.json(rappers)
})

app.listen(process.env.port || PORT, ()=>{
    console.log(`The server is running on port:${PORT}`)
})