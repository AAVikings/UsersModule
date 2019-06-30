
/* This is the database schema definition for the User Collection in Mongo DB */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  authId: {
    type: String,
    index: true,
    unique: true,
    dropDups: true
  },
  referrerId: String,
  creationDate: Number,
  alias: String,
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  emailVerified: Boolean,
  bio: String,
  isDeveloper: Boolean,
  isTrader: Boolean,
  isDataAnalyst: Boolean,
  roleId: String,
  avatarHandle: String,
  avatarChangeDate: String,
  sessionToken: String
})

const User = mongoose.model('User', userSchema)

export default User
