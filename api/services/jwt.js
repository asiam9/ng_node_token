var crypto = require('crypto');

exports.encode = function(payload, secret) {
  var algorithm = 'HS256';
  var header = {
    typ: 'JWT',
    alg: algorithm
  };
  var jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
  // Breaking this into 2 lines so jwt can be re-used
  return jwt + '.' + sign(jwt, secret);
}

function sign(str, key) {
  return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Encode(str) {
  return new Buffer(str).toString('base64');
}