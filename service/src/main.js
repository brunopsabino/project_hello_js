//requisição do módulo axios
const axios = require("axios")
//requisição do módulo express
const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

//credenciais da api do github
const baseURL = "https://api.github.com"
const api = axios.create({ baseURL })

const params = { owner : "sombriks", repo: "hello-js-v5" }

//lista comentários em uma issue - documentação oficial da api
//GET /repos/:owner/:repo/issues/:number/comments

//lista issues de um repositório
//GET /repos/:owner/:repo/issues

//criar rota no express
app.get("/consulta", (req, res) => {
    //console.log({params})
    //consumir api com axios
    //lista as issues do repositório
    api.get(`/repos/${params.owner}/${params.repo}/issues`)
        .then(ret => res.send(ret.data))
        .catch(err => res.status(500).send(err.response.data))

})



//Escutar porta 3000
app.listen(3000, _ => {
    console.log("server online")
})

