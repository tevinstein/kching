var mongoose = require('mongoose'),
bcrypt       = require('bcrypt-nodejs')

var userSchema = mongoose.Schema({
	email   : String,
	password: String
}, { collection: 'users' })

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

var User = mongoose.model('User', userSchema)

module.exports = { User }
