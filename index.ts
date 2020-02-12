import { writeFileStrSync, walkSync, readFileStrSync } from 'https://deno.land/std/fs/mod.ts'


/**
 * TODO:
 * 
 * - Make Component directory if it doesn't exist
 * - Allow cli flags
 */
Deno.mkdirSync('./src/Atoms', true)

for (const { filename, info } of walkSync('./template')) {
    if (info.isFile()) {
        const fileString = readFileStrSync(filename)
        
        const newFilename = filename.split('/').pop().replace('MODULE_NAME', 'MyModule')
        console.log(newFilename)

        const newFileString = fileString.replace(/%MODULE_NAME%/g, 'MyModule')
        
       writeFileStrSync(`./src/Atoms/${newFilename}`, newFileString)
    }
}
