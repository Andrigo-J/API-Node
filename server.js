import express from 'express'

const App = express()

App.get('/usuarios', (req, res) =>{
    res.send('deu bom')
}) //Criar usuarios

App.listen(3000)



// 1. Tipo de rota / Metodo HTTP
// 2. Endereço: www.exemplo.com
