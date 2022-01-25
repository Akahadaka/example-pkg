const parseArgs = require('minimist')

module.exports.test = function() {
    console.log('This is a test')
}

// Place this section below module.exports
const argv = parseArgs(process.argv.slice(2), {})

argv._.forEach(arg => {
    switch(arg) {
        case 'test': this.test(); return;
        default: console.log('Available commands: test')
    }
})