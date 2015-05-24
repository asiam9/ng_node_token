var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password'))           // if pass has been modified we don't need hash
    return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err)
      return next(err);
      // null = secondary progress on bcrypt-nodejs only
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err)
          return next(err);
        user.password = hash;
        next();
      });
   });
});

UserSchema.methods.toJSON = function() {
  var user = this.toObject();
  delete user.password;
  return user;
};

exports.model = mongoose.model('User', UserSchema);
