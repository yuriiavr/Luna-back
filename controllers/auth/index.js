const register = require("./register")
const login = require('./login')
const logout = require('./logout')
const roleStatus = require('./status')
const getCurrent = require('./getCurrent')
const verify = require('./verify')
const resendVerify = require('./resendVerify')

module.exports = {
    register,
    login,
    logout,
    roleStatus,
    getCurrent,
    verify,
    resendVerify,
}