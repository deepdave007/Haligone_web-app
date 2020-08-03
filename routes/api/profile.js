const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//GET API/users
//@access Public

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'There was no profile found for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//POST API/Profile/
//Create update user profile
//@access is supposed to be private
router.post(
  '/',
  [
    auth,
    [
      check(
        'gender',
        'Your gender is required in order to refine the best product searches for you :)'
      )
        .not()
        .isEmpty(),
      check('address', 'Your address is required').not().isEmpty(),
      check(
        'birthday',
        'Your birthday is required to send you birthday surprises from Haligone'
      )
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
