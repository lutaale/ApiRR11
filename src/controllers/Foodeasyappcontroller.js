import FoodeasyAPP from '../models/Foodeasyapp';

class Foodeasyappcontroller {

  async index(req, res) {
    const { user } = req.query;

    const FoodeasyAPPlist = await FoodeasyAPP.find({user:user})

    return res.json(FoodeasyAPPlist)
  }

  async store(req, res) {
    const { user, item, acompanhamentos, tamanho, preco, quantidade, telefone, userrest, urllogo } = req.body;


    const FoodeasyAPPlist = await FoodeasyAPP.create({
      user,
      item,
      acompanhamentos,
      tamanho,
      preco,
      quantidade,
      telefone,
      userrest, urllogo
    });

    return res.json(FoodeasyAPPlist);
  }

  async update(req, res) {
    const { userrest } = req.params;
    const { urllogo } = req.body;


    const fotoperfil = await FoodeasyAPP.updateOne({ userrest: userrest }, {
      urllogo: urllogo
      
    })
    return res.json(fotoperfil)
  }

  async delete(req, res) {
    const { _id } = req.params;

    const restaurantes = await FoodeasyAPP.deleteOne({ _id: _id })

    return res.json(restaurantes)
  }

}

export default new Foodeasyappcontroller();