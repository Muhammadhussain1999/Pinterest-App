const express= require('express')
const router=express.Router()


router.get('/users',(req,res)=>{
    const userData=
        [{
            "id": 1,
            "first_name": "Aurilia",
            "last_name": "Nelhams",
            "email": "anelhams0@jiathis.com",
            "gender": "Female",
            "ip_address": "86.155.118.11"
          }, {
            "id": 2,
            "first_name": "Taber",
            "last_name": "Westell",
            "email": "twestell1@a8.net",
            "gender": "Male",
            "ip_address": "74.215.132.18"
          }, {
            "id": 3,
            "first_name": "Bert",
            "last_name": "Cawthry",
            "email": "bcawthry2@wp.com",
            "gender": "Male",
            "ip_address": "161.161.147.105"
          }]
    res.send(userData)
})
module.exports= router