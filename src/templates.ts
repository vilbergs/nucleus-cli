export interface TemplateFile {
    fileName: string
    content: string
}

interface Templates {
    indexFile: TemplateFile
    componentFile: TemplateFile
    testFile: TemplateFile
    docFile: TemplateFile
}

export function templates(name: string): Templates {
    const indexFile = {
        fileName: `index.ts`,
        content: `export { default } from \'./${name}\'\n`,
    }
    const componentFile = {
        fileName: `${name}.tsx`,
        content:  `import React, \{ FunctionComponent \} from \'react\'\n\ninterface ${
            name
        }Props {}\n\nconst ${name}: FunctionComponent<${
            name
        }Props> = () => {\n  return <div>Hello!</div>\n}\n\nexport default ${name}`,
    }
    const testFile = {
        fileName: `${name}.test.tsx`,
        content: ''
    }
    const docFile = {
        fileName: `${name}.stories.mdx`,
        content: ''
    }
    
    return { indexFile, componentFile, testFile, docFile }
}
