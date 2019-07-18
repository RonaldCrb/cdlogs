import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isMerchant: { type: Boolean },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  // merchants: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Merchant'
  // }]
})

export default model('User', UserSchema)