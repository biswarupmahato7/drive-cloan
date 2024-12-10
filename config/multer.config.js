const { credential } = require('firebase-admin');
const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-498e5-firebase-adminsdk-ocr2v-407978b938.json');


const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-498e5.firebasestorage.app',
    unique:true,
})


const upload = multer({
    storage:storage,
})

module.exports = upload;