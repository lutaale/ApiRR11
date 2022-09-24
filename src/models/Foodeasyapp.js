import { Schema, model } from 'mongoose';

const FoodeasyAPP = new Schema({
  user: String,
  item: String,
  acompanhamentos: String,
  tamanho: String,
  preco: Number,
  quantidade:String
});


export default model('Foodeasyapp', FoodeasyAPP);