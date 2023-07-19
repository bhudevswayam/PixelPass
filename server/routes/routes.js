import express from 'express'
import {uploadImage, downloadImage} from '../controller/imageController.js';
import upload from '../utils/uploads.js';

const router = express.Router();
router.get('/', function(req, res){
    res.send('yo Bitches')
})
router.post('/upload' ,upload.single('file'), uploadImage)
router.get('/file/:fileId', downloadImage)

export default router;