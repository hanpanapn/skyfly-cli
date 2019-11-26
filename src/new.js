import  {join} from 'path'
import vfs from 'vinyl-fs'
import througn from "through2";

exports.run=(name,other)=>{
    const cwd=join(__dirname,'../template')
    const dest=process.cwd()
    console.log(`add a project at:${dest}.`); 
    vfs
        .src(["**/*","!node_modules/**/*"],{cwd:cwd,cwdbase:true,dot:true})
        .pipe(template(dest,cwd))
        .pipe(vfs.dest(dest))
        .on('end',()=>{
            console.log("create project end");
            
        })
        .resume()
    function template(dest,cwd) {
        return througn.obj(function (file,enc,cb) {
            if (!file.stat.isFile) {
                return cb()
            }
            console.log(file.path.replace(cwd+'/',""));
            this.push(file)
            cb()
        })
    }
    
}