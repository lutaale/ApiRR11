import Produtos from "../schemas/Produtos";

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
        const { produto, modelo, preco, categoria, cor, cor2, cor3, cor4, descricao, imgurl, imgurl2, imgurl3, imgurl4, imgurl5, imgurl6, imgurl7, imgurl8, tamanho, tamanho2, tamanho3, tamanho4 } = req.body;


        const Produtolist = await Produtos.create({
            produto,
            modelo,
            preco,
            cor,
            cor2,
            cor3,
            cor4,
            descricao,
            categoria,
            imgurl,
            imgurl2,
            imgurl3,
            imgurl4,
            imgurl5,
            imgurl6,
            imgurl7,
            imgurl8,
            tamanho,
            tamanho2,
            tamanho3,
            tamanho4
        });

        return res.json(Produtolist);
    }

    async delete(req, res) {
        const { _id } = req.params
        const Produtolist = await Produtos.deleteOne({ _id: _id })
        return res.json(Produtolist)
    }

    async update(req, res) {
        const { produto, modelo,marca, preco, categoria, cor, cor2, cor3, cor4, descricao, imgurl, imgurl2, imgurl3, imgurl4, imgurl5, imgurl6, imgurl7, imgurl8, tamanho, tamanho2, tamanho3, tamanho4 } = req.body;
        const Produtolist = await Produtos.updateOne({
            produto,
            modelo,
            marca,
            preco,
            cor,
            cor2,
            cor3,
            cor4,
            descricao,
            categoria,
            imgurl,
            imgurl2,
            imgurl3,
            imgurl4,
            imgurl5,
            imgurl6,
            imgurl7,
            imgurl8,
            tamanho,
            tamanho2,
            tamanho3,
            tamanho4
        })
        return res.json(Produtolist)

    }

}

export default new ProdutoController();