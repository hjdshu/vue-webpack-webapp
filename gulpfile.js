var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var imagesPath = path.join('./src/assets/images');
var jsPath     = path.join('./src/assets/script/loadimg.js');


//  读取images 文件
gulp.task('wr', () =>{
    //  js替换文件正则~
    var re = /(\/\*listStart\*\/)([\s\S]*?)(\/\*listEnd\*\/)/;
    readImages().then( (imagesList) =>{
        return imagesList;
    }).then( imagesList =>{
        return readFile().then( fileText => {
            return [imagesList, fileText];
        });
    }).then(propsArr =>{
        //  jsText     读取到的文件 即将写入到loadImg.js 文件的数组列表

        var jsText = propsArr[1];
        var fileText = propsArr[0];
        if(re.test(jsText)){
            jsText = jsText.replace(re, function ($0) {
                return '/*listStart*/\n'
                    +'var list =' + JSON.stringify(fileText)
                    +';\n/*listEnd*/';
            });
            return jsText;
        }
    }).then( jsText=>{
        writeFile(jsText);
    } );

    // 读取图片文件目录  配合打包, 把大于10K的图片全部读取并存写入到loadimg.js中
    function readImages() {
        console.log('====================readImages start=====================');
        var promise = new Promise( (resolve, reject) =>{
            fs.readdir(imagesPath, function (err, files) {
                if (err) {
                    throw err;
                }
 
                var img = /.(png|jpe?g)(\?.*)?$/;
                var list = [];
                var len = files.length;
                var count = 0;
                files.forEach(function (file) {
                    // 在window  和在 MAC 下  路径的斜杠不同
                    var filePath = imagesPath + '\/' + file;
                    fs.stat(filePath, function (err, data) {
                        count++;
                        if (err) {
                            reject(err);
                            throw err;
                        } else if (img.test(file) && data.size > 9999) {
                            list.push(file);
                        }
                        if (count == len) {
                            console.log(list)
                            resolve(list);
                        }
                    })
                });
            });
        });
        return promise;
    }
    // 读取JS文件
    function readFile() {
        var promise = new Promise((resolve, reject) =>{
            fs.readFile(jsPath, function (err, data) {
                if(err){
                    if(err.errno == -2){
                        console.log('没有找到文件。。。')
                    }else{
                        throw err;
                    }
                    //
                }
                if(typeof data == 'object'){
                    resolve(data.toString());
                }
            })
        });
        return promise;
    }
    // 写入JS文件
    function writeFile(jsText) {
        fs.writeFile(jsPath, jsText, function (err) {
            if(err){
                throw err;
            }
            console.log('It\'s saved!')
        })
    }

});

