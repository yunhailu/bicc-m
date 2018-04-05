/**
 * Created by yunhailu on 2018/4/5.
 */
var fs = require('fs');
var path = require('path');

var db = {};

module.exports = function(){
    var files = scanDir(path.join(__dirname, "./data")); //获取文件列表
    files.forEach((file)=>{ //构建数据库
        db[path.basename(file).split('.')[0]] = require(file);
    });

    files.forEach((file)=>{ //监听文件变化
        fs.watch(file, ()=>{
            delete require.cache[path.resolve(file)]; //清除require中对应缓存，以获取文件最新内容
            try {
                db[path.basename(file).split('.')[0]] = require(file); //更新数据库中对应数据
            } catch(e) {
                //文件正在修改时可能存在语法错误，不能正常require，此时不予处理
            }

        });
    });

    return db;
};

/**
 * 遍历文件夹
 * @param dir
 * @returns {Array}
 */
function scanDir(dir){
    var files = [];
    scan(dir);
    function scan(_dir){
        if (fs.statSync(_dir).isFile() && _dir.indexOf('.DS_Store') < 0) {
            return files.push(_dir)
        }
        fs.statSync(_dir).isDirectory()&&
        fs.readdirSync(_dir).forEach((file) => {
            scan(_dir + '/' + file)
        })
    }
    return files
}

