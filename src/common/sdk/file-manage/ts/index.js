"use strict";
exports.__esModule = true;
exports.CheckfilesArrayByDir = void 0;
var fs = require('fs');
var path = require('path');
var extnames = ['.png', '.jpg'];
function CheckfilesArrayByDir(Path) {
    //读取文件路径中的文件
    fs.readdirSync(Path).map(function (Filename) {
        //返回文件全路径
        return path.join(Path, Filename);
    }).filter(function (Filename) {
        //判端是否为文件
        if (fs.statSync(Filename).isFile()) {
            //获取文件后缀并比对
            if (extnames.includes(path.extname(Filename))) {
                return true;
            }
        }
        return false;
    });
}
exports.CheckfilesArrayByDir = CheckfilesArrayByDir;
;
