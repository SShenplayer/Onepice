// const fs = require('fs')
// const path = require('path')
import * as fs from 'fs';
import * as path from 'path';
const extnames: any = ['.png', '.jpg']
const CheckfilesArrayByDir: any | string[] = function (Path: string) {
    console.log("fs:", fs)
    //读取文件路径中的文件
    return fs.readdirSync(Path).map((Filename: string) => {
        //返回文件全路径
        return path.join(Path, Filename)
    }).filter((Filename: string) => {
        //判端是否为文件
        if (fs.statSync(Filename).isFile()) {
            //获取文件后缀并比对
            if (extnames.includes(path.extname(Filename))) {
                return true
            }
        }
        return false
    })

};
export { CheckfilesArrayByDir };
