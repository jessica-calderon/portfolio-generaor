const fs = require('fs');

// reassign page-template.js module.exports object to generatePage variable in app.js
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
    
    console.log('Portfolio complete! Checkout index.html to see the output!');
});