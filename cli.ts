import { parse } from 'https://deno.land/std/flags/mod.ts'
import { writeFileStrSync, existsSync } from 'https://deno.land/std/fs/mod.ts'
import { templates, TemplateFile } from './src/templates.ts'

const [componentType, moduleName, path] = parse(Deno.args)._

const typeToDirectoryMap = {
    atom: 'Atoms',
    molecule: 'Molecules',
    organism: 'Organisms',
}

const workingDir = Deno.cwd()

if (!typeToDirectoryMap[componentType]) {
    throw Error('❌ Component type must be one of atom | molecule | organism')
}

const templateRegistry = templates(moduleName)

Object.values(templateRegistry).forEach(({fileName, content}: TemplateFile) => {
    const pathToWriteFile = `${workingDir}/${path}`
    const finalPath = `${pathToWriteFile}/${typeToDirectoryMap[componentType]}/${moduleName}`

    if (!existsSync(pathToWriteFile)) {
        throw new Error(`${pathToWriteFile} is not a valid file path, please check your path parameter and try again`)
    } else {
        Deno.mkdirSync(finalPath, true)

        writeFileStrSync(
            `${finalPath}/${fileName}`,
            content,
        )
    }
})

console.log(`✅ Successfully created ${moduleName}`)

