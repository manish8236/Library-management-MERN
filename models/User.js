const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// {"_id":{"$oid":"5cb6d814f26af83d007e3f29"},
// "name":"Manish","email":"mpal8236@gmail.com",
// "password":"$2a$10$wOzTe48aTWFGaC3BxeZAK.oa6XZBVY8mp1LGJXGEU.SD.IklOLfJq",
// "date":{"$date":{"$numberLong":"1555486740864"}},
// "__v":{"$numberInt":"0"}}

const AdminID="5cb6d814f26af83d007e3f29";
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },

  isAdmin: { type: 'boolean',
    default:false
  }
});

module.exports = User = mongoose.model('user', UserSchema);
