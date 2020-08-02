const mongooose = require('mongoose');

const ProfileSchema = new mongooose.Schema({
  user: {
    type: mongooose.Schema.Types.ObjectId,
    ref: 'user',
  },

  profilepicture: {
    type: String,
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },

  address: [
    {
      apartmentnumber: {
        type: Number,
        required: true,
      },
      streetname: {
        type: String,
        required: true,
      },
      postalcode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
  ],
  birthday: {
    type: Date,
    required: true,
  },
  about: {
    type: String,
  },
  favoritelocalstores: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongooose.model('profile', ProfileSchema);
