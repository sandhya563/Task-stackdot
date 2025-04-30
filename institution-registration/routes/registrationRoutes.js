const express = require('express');
const router = express.Router();
const {registerInstitution} = require('../contoller/registrationController');

router.post('/register', registerInstitution);

module.exports = router
