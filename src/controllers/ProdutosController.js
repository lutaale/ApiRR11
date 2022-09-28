import Produtos from "../schemas/Produtos";
window.screen.width
class ProdutoController {

    async index(req, res) {

        const Produtolist = await Produtos.find()

        return res.json(Produtolist)
    }

    async index2(req, res) {
        const { produto } = req.query;
        const Produtolist = await Produtos.find({ produto: produto })
        return res.json(Produtolist)

    }


    async store(req, res) {
        const { produto, preco, categoria, cor, descricao, imgurl, tamanho } = req.body;


        const Produtolist = await Produtos.create({
            produto,
            preco,
            cor,
            descricao,
            categoria,
            imgurl,
            tamanho
        });

        return res.json(Produtolist);
    }
win
    async delete(req, res) {
        const { _id } = req.params
        const Produtolist = await Produtos.deleteOne({ _id: _id })
        return res.json(Produtolist)
    }

    async update(req, res) {
        const { produto, preco, categoria, cor, descricao, imgurl, tamanho } = req.body;
        const Produtolist = await Produtos.updateOne({
            produto,
            preco,
            cor,
            descricao,
            categoria,
            imgurl,
            tamanho
        })
        return res.json(Produtolist)

    }

}

export default new ProdutoController();