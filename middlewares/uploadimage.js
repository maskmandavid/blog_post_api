import multer from "multer";
import path from "path";
const storage =multer.diskStorage({
    filename:function(req,file,callback){
        const filename= 'profile'.replace(/:/g,'_')+file.originalname
        callback(null,filename)
    },
    destination:path.resolve(process.cwd()+'/uploads')

});

const upload =multer({storage})
export default upload;