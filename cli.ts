const { args } = Deno
import { parse } from "https://deno.land/std/flags/mod.ts";
import { writeFileStrSync, walkSync, readFileStrSync } from 'https://deno.land/std/fs/mod.ts'

const { t: componentType = 'atom', m: moduleName = 'NewComponent' } = parse(args)

const typeToDirectoryMap = {
    atom: 'Atoms',
    molecule: 'Molecules',
    organism: 'Organisms'
}

if (!typeToDirectoryMap[componentType]) {
    throw Error('Component type (-t) must be one of atom | molecule | organism')
}

for (const { filename, info } of walkSync('./template')) {
    if (info.isFile()) {
        const fileString = readFileStrSync(filename)
        
        const newFilename = filename.split('/').pop().replace('MODULE_NAME', moduleName)
        console.log(newFilename)

        const newFileString = fileString.replace(/%MODULE_NAME%/g, moduleName).replace(/%MODULE_TYPE%/g, componentType)
        
        Deno.mkdirSync(`./src/${typeToDirectoryMap[componentType]}/${moduleName}`, true)
        writeFileStrSync(`./src/${typeToDirectoryMap[componentType]}/${moduleName}/${newFilename}`, newFileString)
    }
}
