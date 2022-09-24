import FoodeasyAPP from '../models/Foodeasyapp';

class Foodeasyappcontroller {

  async index(req, res) {
    const { user } = req.query;

    const FoodeasyAPPlist = await FoodeasyAPP.find({user:user})

    return res.json(FoodeasyAPPlist)
  }

  async store(req, res) {
    const { user, item, acompanhamentos, tamanho, preco, quantidadegit} = req.body;


    const FoodeasyAPPlist = await FoodeasyAPP.create({
      user,
      item,
      acompanhamentos,
      tamanho,
      preco,
      quantidade
    });

    return res.json(FoodeasyAPPlist);
  }

  /*async update(req, res) {
    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id)
    const house = await House.findById(house_id)

    //verificando se usuario logado é o mesmo que é dono da casa para poder fazer altercações
    if (String(user._id) !== String(house.user)) {
      return res.status(401).json({ error: 'Nao autorizado' })
    }

    const houses = await House.updateOne({ _id: house_id }, {
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    })
    return res.json(houses)
  }*/

  async delete(req, res) {
    const { _id } = req.params;

    const restaurantes = await FoodeasyAPP.deleteOne({ _id: _id })

    return res.json(restaurantes)
  }

}

export default new Foodeasyappcontroller();