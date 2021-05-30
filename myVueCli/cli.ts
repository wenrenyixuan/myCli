#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');

inquirer.prompt([{
  type: 'input',
  name: 'test',
  message: 'please input your project name'
}]).then((anwser:object) => {
  const temDir = path.join(__dirname, 'templates');
  const dstDir = process.cwd();
  fs.readdir(temDir, (err: any, files: Array<string>) => {
    if(err) throw err;
    files.forEach((file: string) => {
      ejs.renderFile(path.join(temDir, file), anwser, (err: object, result: string ) => {
        if(err) throw err;
        fs.writeFileSync(path.join(dstDir, file), result)
      })
    })
  })
})