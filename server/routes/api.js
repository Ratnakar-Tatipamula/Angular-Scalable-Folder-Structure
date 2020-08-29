
const express = require('express');
const router = express.Router();

const users = [];

console.log('Hello');

router.post('/user-ins', (req,res) => {
    console.log('BACK END ', req.body);
    users.push(req.body);
    console.log("USERS ", users);
    console.log(typeof req.body.name);
    console.log("USER ", users.filter(user => user.name==req.body.name ));
    return res.send(JSON.stringify("Succesfully registered"));

})

router.post('/user-ret', (req,res) => {
    console.log("Login Details: ", req.body);
    console.log("USER ", users.filter(user => user.name==req.body.name )[0]);
    console.log("Hello");
    return res.send(JSON.stringify("LoggedIn"));
})

module.exports = router;