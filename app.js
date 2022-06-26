const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
/* const fs = require('fs');

// reassign page-template.js module.exports object to generatePage variable in app.js
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage (name, github);

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
    
    console.log('Portfolio complete! Checkout index.html to see the output!');
}); */