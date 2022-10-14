//ES6
// import { CheckfilesArrayByDir } from './ESNext/index'
// let array = CheckfilesArrayByDir("D:/MyProject/project1_OnePice/vite_Client/src/assets/adsImgs")
// console.log("array:", array)

//COMMONJS
let fileManage = require('./CommonJS/index')
let array = fileManage.CheckfilesArrayByDir("D:/MyProject/project1_OnePice/vite_Client/src/assets/adsImgs")
console.log(array)