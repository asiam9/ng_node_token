var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

UserSchema.methods.toJSON = function() {
  var user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = function(password, callback) {
  bcrypt.compare(password, this.password, callback);
}

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

module.exports = mongoose.model('User', UserSchema);
