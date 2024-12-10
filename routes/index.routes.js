const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth')
const upload = require('../config/multer.config')
const fileModule = require('../models/files.models')
const firebase = require('../config/firebase.config')

router.get('/home', authMiddleware, async(req,res)=>{
    

    const userFiles = await fileModule.find({
        user: req.user.userId
    })

   // throw ('error') // error handeling

    res.render('home',{
        files: userFiles
    });
})

router.post('/upload', authMiddleware,upload.single('file'), async(req,res)=>{
    const newFile = await fileModule.create({
        path: req.file.path,
        originalname: req.file.originalname,
        user: req.user.userId
    })
    res.json(newFile)
})

router.get('/download/:path', authMiddleware, async(req,res)=>{

    const loggedInUserId = req.user.userId;
    const path = req.params.path;

    const file = await fileModule.findOne({
        user: loggedInUserId,
        path: path,

    })

    if(!file){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
   
    const singedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 1000
    })

    res.redirect(singedUrl[0])

})

module.exports = router;