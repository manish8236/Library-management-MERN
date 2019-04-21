const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  bookdescription : {
    type: String,
    default:"A New book"

    },
    author : {
      type: String

      },
  date: {
    type: Date,
    default: Date.now
  },

  borrowed:{
    type: Boolean
  },

  returned:{
    type:Boolean
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
