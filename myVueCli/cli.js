#! /usr/bin/env node
"use strict";
var fs = require('fs');
var path = require('path');
var inquirer = require('inquirer');
var ejs = require('ejs');
inquirer.prompt([{
        type: 'input',
        name: 'test',
        message: 'please input your project name'
    }]).then(function (anwser) {
    var temDir = path.join(__dirname, 'templates');
    var dstDir = process.cwd();
    fs.readdir(temDir, function (err, files) {
        if (err)
            throw err;
        files.forEach(function (file) {
            ejs.renderFile(path.join(temDir, file), anwser, function (err, result) {
                if (err)
                    throw err;
                fs.writeFileSync(path.join(dstDir, file), result);
            });
        });
    });
});
