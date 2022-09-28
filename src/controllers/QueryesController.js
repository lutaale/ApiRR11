import Produtos from "../schemas/Produtos";


class Querycontroller {

    async getproduto(req, res) {
        const { produto } = req.query;

        const Produtolist = await Produtos.findOne({ produto: produto })
        
        return res.json(Produtolist)
    }

}
export default new Querycontroller();