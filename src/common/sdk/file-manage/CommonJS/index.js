"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckfilesArrayByDir = void 0;
const fs = require('fs');
const path = require('path');
const extnames = ['.png', '.jpg'];
// export function CheckfilesArrayByDir(Path: string) {
//     //读取文件路径中的文件
//     fs.readdirSync(Path).map((Filename: string) => {
//         //返回文件全路径
//         return path.join(Path, Filename)
//     }).filter((Filename: string) => {
//         //判端是否为文件
//         if (fs.statSync(Filename).isFile()) {
//             //获取文件后缀并比对
//             if (extnames.includes(path.extname(Filename))) {
//                 return true
//             }
//         }
//         return false
//     })
// };
const CheckfilesArrayByDir = function (Path) {
    //读取文件路径中的文件
    return fs.readdirSync(Path).map((Filename) => {
        //返回文件全路径
        return path.join(Path, Filename);
    }).filter((Filename) => {
        //判端是否为文件
        if (fs.statSync(Filename).isFile()) {
            //获取文件后缀并比对
            if (extnames.includes(path.extname(Filename))) {
                return true;
            }
        }
        return false;
    });
};
exports.CheckfilesArrayByDir = CheckfilesArrayByDir;
