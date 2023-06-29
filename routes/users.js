const express = require('express');

const userController = require('../controller/user');

const router = express.Router();



router.post('/add-employee',userAuthentication.authenticate,userController.addEmployee )

router.get('/get-employee',userAuthentication.authenticate,userController.getEmployee )

router.delete('/delete-employee/:id',userAuthentication.authenticate,userController.deleteEmployee )

module.exports = router;