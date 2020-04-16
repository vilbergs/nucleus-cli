# nucleus-cli

An atomic component generator build in Deno!

Issues and PR's Welcome

## Requirements

-   [Deno](https://deno.land/) v0.35 or newer

## Installing

```bash
  $ deno install --allow-write --allow-read nucleus https://raw.githubusercontent.com/vilbergs/nucleus-cli/master/cli.ts

  // ✅ Successfully installed nucleus
```

### Specifying install directory

If you want to specify where the binary gets installed, you can use the `--dir` (`-d`) flag.

So the example command above might look something like this:

```bash
  // MacOS
  $ deno install --allow-write --allow-read nucleus --dir /usr/local/bin https://raw.githubusercontent.com/vilbergs/nucleus-cli/master/cli.ts
  
  // Linux:
  $ deno install --allow-write --allow-read nucleus --dir /usr/bin https://raw.githubusercontent.com/vilbergs/nucleus-cli/master/cli.ts

  // ✅ Successfully installed nucleus
```

To learn more, check out the `deno install` documentation: https://deno.land/std/manual.md#installing-executable-scripts

## How to use

The CLI takes 3 arguments; the type of module, the name of it and the path to write to.

```bash
    $ nucleus [atom | molecule | organism] MyAtomicComponent path/to/component

    // ✅ Successfully created MyAtomicComponent
```

**Example:**

```bash
    $ nucleus atom Button ./src

    // ✅ Successfully created Button
```

This will create ./src/Atoms/Button in your working directory.

```bash
./src
├── Atoms
│   ├── Button
│   │   ├── Button.stories.mdx
│   │   ├── Button.test.tsx
│   │   ├── Button.tsx
│   │   └── index.ts
```

## Philosophy

The ultimate goal of nucleus is to provide a single, simple to use executable for generating components from string templates.
At some point I would like the templates to be configurable but the previous must always be true.
