const mongooseDB = require("./db");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Hashing the password before saving to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

const InventoryItem = mongoose.model('InventoryItem', inventoryItemSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  InventoryItem,
  User
}
