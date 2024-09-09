const {produto} = require("./app")

const preços = (req, res) => {
    const { preço } = req.query
    const produtos = produto.find(l => l.preço == preço)
      if(produtos){
        res.status(200).send(produtos)
     } else{
        res.status(404).send('não encontrado !')
     }
}
module.exports = preços