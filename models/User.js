const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')
    , bcrypt = require('bcrypt');

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true}
}, {timestamps: {'created_at':'created_at'}});

userSchema.pre('save', function (next) {
  var u = this;

  bcrypt.genSalt(10, function(e, s) {
    if (e) return next(e);

    bcrypt.hash(u.password, s, (err, h) => {
      u.password = h;

      next();
    });
  });
});

userSchema.methods.compare = function(pw) {
  console.log(pw);
  return bcrypt.compareSync(pw, this.password);
};

module.exports = mongoose.model("User", userSchema);
