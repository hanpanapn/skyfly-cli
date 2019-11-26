#!/usr/bin/env node
const program = require('commander')
// program
//     .version(require('../package').version)
//     .on('--help', printHelp)
//     .usage('<command> [options]')
//     .parse(process.argv)
program
    .command('new')
    .description('Create a new project')
    .action((name,other)=>{
        require('../lib/new.js').run(name,other)
        
    })
program.parse(process.argv)
 