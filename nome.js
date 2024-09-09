const {produto} = require("./app")

const nomes = (req, res) => {
    const { nome } = req.query
    const produtos = produto.find(l => l.nome == nome)
      if(produtos){
        res.status(200).send(produtos)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = nomes