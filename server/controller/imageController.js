import File from "../model/file.js";
export const uploadImage = async (req,res) =>{
    const fileObj = {
        path : req.file.path,
        name: req.file.originalname
    }
    try{
        const file = await File.create(fileObj);
        console.log(file);
        res.status(200).json({path: `https://pixelpass.onrender.com/file/${file._id}`});
    }
    catch(e){
        console.error(e);
        res.status(500).json({err : 'server Down'});
    }
}

export const downloadImage = async (req,res) =>{
    try{
        const file = await File.findById(req.params.fileId)
        
        file.downloadContent++;

        await file.save();

        res.download(file.path,file.name);
    }
    catch(e){
        console.error(e);
        res.status(500).json({err : 'server Down'});
    }
}
