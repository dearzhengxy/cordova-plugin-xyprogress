var exec = require("cordova/exec");


function  Progress() {};


//showAlertWithTitle是我们OC的方法
//option是入参
Progress.prototype.jsProgressShow = function (success,fail,option) {
     exec(success, fail, 'CDVXYProgress', 'showProgress', option);
};
               
//new一个Progress的类对象，并赋值给module.exports
var progressModel = new Progress();
module.exports = progressModel;
