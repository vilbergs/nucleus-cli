import { parse } from "https://deno.land/std/flags/mod.ts"
import { writeFileStrSync, walkSync, readFileStrSync } from 'https://deno.land/std/fs/mod.ts'
import { __ } from 'https://deno.land/x/dirname/mod.ts'

const { __dirname } = __(import.meta);
const [componentType, moduleName] = parse(Deno.args)._
const typeToDirectoryMap = {
    atom: 'Atoms',
    molecule: 'Molecules',
    organism: 'Organisms'
}

const workingDir = Deno.cwd()

if (!typeToDirectoryMap[componentType]) {
    throw Error('Component type must be one of atom | molecule | organism')
}

for (const { filename, info } of walkSync(`${__dirname}/template`)) {
    if (info.isFile()) {
        const fileString = readFileStrSync(filename)
        const newFilename = filename.split('/').pop().replace('MODULE_NAME', moduleName)
        const newFileString = fileString.replace(/%MODULE_NAME%/g, moduleName).replace(/%MODULE_TYPE%/g, componentType)
        
        Deno.mkdirSync(`${workingDir}/src/${typeToDirectoryMap[componentType]}/${moduleName}`, true)
        writeFileStrSync(`${workingDir}/src/${typeToDirectoryMap[componentType]}/${moduleName}/${newFilename}`, newFileString)
    }
}

console.log(`✅ Successfully created ${moduleName}`)