const Firebase = require('firebase-admin')

const serviceAccount = require('../drive-498e5-firebase-adminsdk-ocr2v-407978b938.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-498e5.firebasestorage.app'
})

module.exports = Firebase;