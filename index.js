const words = process.argv[2];
const langs = require('langs');
const franc = require('franc');
const colors = require('colors');

const fromFranc = franc(words);
if (fromFranc == 'und') {
    console.log('sorry, couldnt guess the language! try again with some more sample text!'.red);
} else {
    const detected = langs.where("3", fromFranc);
    console.log(`Our best guess is: ${detected.name}`.blue);
}